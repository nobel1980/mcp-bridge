// src/tools/logTool.ts

import fs from "fs";

export const readLogs = async (date: string) => {
    const path = `/log/${date}_app.log`;

    if (!fs.existsSync(path)) {
        throw new Error("Log file not found");
    }

    const data = fs.readFileSync(path, "utf-8");

    return {
        content: data.slice(0, 5000),
    };
};