import fs from "node:fs/promises";
import path from "node:path";
import { logger } from "../utils/logger.js";
import { FileInfo, FileContent } from "../types/filesystem.types.js";

export class FileService {
    private readonly rootDir: string;

    constructor() {
        this.rootDir = process.cwd();
    }

    async listFiles(dirPath: string = "."): Promise<FileInfo[]> {
        try {
            const absolutePath = path.resolve(this.rootDir, dirPath);
            
            // Safety check: Ensure the path is within the project root
            if (!absolutePath.startsWith(this.rootDir)) {
                throw new Error("Access denied: Path is outside the project root.");
            }

            const entries = await fs.readdir(absolutePath, { withFileTypes: true });
            
            return Promise.all(entries.map(async (entry) => {
                const entryPath = path.join(dirPath, entry.name);
                const stats = await fs.stat(path.join(absolutePath, entry.name));
                
                return {
                    name: entry.name,
                    path: entryPath,
                    isDirectory: entry.isDirectory(),
                    size: stats.size,
                    extension: entry.isFile() ? path.extname(entry.name) : undefined
                };
            }));
        } catch (error: any) {
            logger.error(`[FILESYSTEM] Failed to list files in ${dirPath}: ${error.message}`);
            throw error;
        }
    }

    async readFile(filePath: string): Promise<FileContent> {
        try {
            const absolutePath = path.resolve(this.rootDir, filePath);

            if (!absolutePath.startsWith(this.rootDir)) {
                throw new Error("Access denied: Path is outside the project root.");
            }

            const content = await fs.readFile(absolutePath, "utf-8");
            
            return {
                content,
                encoding: "utf-8",
                path: filePath
            };
        } catch (error: any) {
            logger.error(`[FILESYSTEM] Failed to read file ${filePath}: ${error.message}`);
            throw error;
        }
    }
}

export const fileService = new FileService();
