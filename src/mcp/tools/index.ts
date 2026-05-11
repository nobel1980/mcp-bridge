// src/tools/index.ts

import express from "express";
import { readLogs } from "./logTool.js";

const router = express.Router();

router.get("/", (_, res) => {
    res.json({
        tools: [
            {
                name: "read-logs",
                description: "Read application logs",
            },
        ],
    });
});

router.post("/read-logs", async (req, res) => {
    try {
        const result = await readLogs(req.body.date);

        res.json({
            success: true,
            result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;