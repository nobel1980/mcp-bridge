import mysql from "mysql2/promise";
import { databaseConfig } from "../config/database.config.js";
import { logger } from "../utils/logger.js";
import { DatabaseStatus, ColumnInfo } from "../types/database.types.js";

export class DatabaseService {

    private pool: mysql.Pool;

    constructor() {
        this.pool = mysql.createPool(databaseConfig);
        logger.info("[DATABASE] Pool initialized");
    }

    async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
        try {
            const [rows] = await this.pool.execute(sql, params);
            return rows as T[];
        } catch (error: any) {
            logger.error(`[DATABASE] Query Error: ${error.message}`, { sql });
            throw error;
        }
    }

    async getStatus(): Promise<DatabaseStatus> {
        try {
            await this.pool.query("SELECT 1");
            return {
                status: "connected",
                db: databaseConfig.database,
                timestamp: new Date().toISOString()
            };
        } catch (error: any) {
            logger.warn(`[DATABASE] Status check failed: ${error.message}`);
            return {
                status: "disconnected",
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    async getTables(): Promise<any[]> {
        try {
            const [rows] = await this.pool.query("SHOW TABLES");
            return rows as any[];
        } catch (error: any) {
            logger.error(`[DATABASE] Failed to get tables: ${error.message}`);
            throw error;
        }
    }

    async describeTable(table: string): Promise<ColumnInfo[]> {
        try {
            const [rows] = await this.pool.query(`DESCRIBE \`${table}\``);
            return rows as ColumnInfo[];
        } catch (error: any) {
            logger.error(`[DATABASE] Failed to describe table ${table}: ${error.message}`);
            throw error;
        }
    }

    async close() {
        await this.pool.end();
        logger.info("[DATABASE] Pool closed");
    }
}

export const databaseService = new DatabaseService();