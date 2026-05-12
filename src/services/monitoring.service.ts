import os from "node:os";
import { logger } from "../utils/logger.js";
import { SystemHealth, MemoryUsage, CPUInfo, MonitoringReport } from "../types/monitoring.types.js";

export class MonitoringService {

    getSystemHealth(): SystemHealth {
        try {
            return {
                platform: process.platform,
                nodeVersion: process.version,
                uptime: process.uptime(),
                timestamp: new Date().toISOString(),
            };
        } catch (error: any) {
            logger.error(`[MONITORING] Failed to get health: ${error.message}`);
            throw error;
        }
    }

    getMemoryUsage(): MemoryUsage {
        try {
            const mem = process.memoryUsage();
            return {
                rss: `${(mem.rss / 1024 / 1024).toFixed(2)} MB`,
                heapTotal: `${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`,
                external: `${(mem.external / 1024 / 1024).toFixed(2)} MB`,
            };
        } catch (error: any) {
            logger.error(`[MONITORING] Failed to get memory: ${error.message}`);
            throw error;
        }
    }

    getCPUInfo(): CPUInfo {
        try {
            return {
                cores: os.cpus().length,
                loadAvg: os.loadavg(),
                arch: os.arch(),
                model: os.cpus()[0]?.model
            };
        } catch (error: any) {
            logger.error(`[MONITORING] Failed to get CPU info: ${error.message}`);
            throw error;
        }
    }

    getFullReport(): MonitoringReport {
        try {
            return {
                system: this.getSystemHealth(),
                memory: this.getMemoryUsage(),
                cpu: this.getCPUInfo(),
                freeMem: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
                totalMem: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            };
        } catch (error: any) {
            logger.error(`[MONITORING] Failed to generate full report: ${error.message}`);
            throw error;
        }
    }
}

export const monitoringService = new MonitoringService();