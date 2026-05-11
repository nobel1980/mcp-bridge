import fs from "fs/promises";
import path from "path";

export const projectService = {
    async getSummary(dirPath: string): Promise<string[]> {
        // ... your existing readdir logic
        const files = await fs.readdir(dirPath);
        return files;
    },

    // ADD THIS METHOD
    async readFileContent(filePath: string): Promise<string> {
        try {
            // Read the file with UTF-8 encoding
            const content = await fs.readFile(filePath, "utf-8");
            return content;
        } catch (error) {
            console.error(`Error reading file at ${filePath}:`, error);
            throw new Error(`Could not read file: ${filePath}`);
        }
    }
};