import express from "express";

export async function startRestApi() {

    const app = express();

    app.get("/health", (_, res) => {

        res.json({
            status: "ok",
            uptime: process.uptime(),
        });
    });

    app.get("/debug/tools", (_, res) => {

        res.json({
            tools: [
                "get_project_summary",
                "read_file"
            ]
        });
    });

    const PORT = Number(process.env.REST_PORT || 4000);

    app.listen(PORT, () => {
        console.error(`🚀 REST API running on ${PORT}`);
    });
}