import { logger } from '../dist/utils/logger.js';
import fs from 'fs';
import path from 'path';

async function test() {
    console.log("Testing logger...");
    logger.info("This is a test info message");
    logger.warn("This is a test warning message");
    logger.error("This is a test error message");

    const date = new Date().toISOString().split('T')[0];
    const logPath = path.join(process.cwd(), 'log', `${date}_app.log`);

    console.log(`Checking log file: ${logPath}`);
    if (fs.existsSync(logPath)) {
        const content = fs.readFileSync(logPath, 'utf-8');
        console.log("LOG CONTENT:\n" + content);
        if (content.includes("test info message") && content.includes("test warning message") && content.includes("test error message")) {
            console.log("SUCCESS: All messages found in log file.");
        } else {
            console.error("FAILURE: Some messages missing from log file.");
        }
    } else {
        console.error("FAILURE: Log file was not created.");
    }
}

test().catch(console.error);
