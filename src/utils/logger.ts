import fs from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "log");

const getLogPath = () => {
    const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    return path.join(LOG_DIR, `${date}_app.log`);
};

const writeToFile = (level: string, msg: string) => {
    try {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${msg}\n`;
        fs.appendFileSync(getLogPath(), logEntry);
    } catch (error) {
        console.error("[CRITICAL] Failed to write to log file:", error);
    }
};

export const logger = {
    info: (msg: string, ...args: any[]) => {
        console.error(`[INFO] ${msg}`, ...args);
        writeToFile("INFO", msg);
    },
    warn: (msg: string, ...args: any[]) => {
        console.error(`[WARN] ${msg}`, ...args);
        writeToFile("WARN", msg);
    },
    error: (msg: string, ...args: any[]) => {
        console.error(`[ERROR] ${msg}`, ...args);
        writeToFile("ERROR", msg);
    },
};