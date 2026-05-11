import express from "express";

export const startSseServer = async () => {

    const app = express();

    app.get("/events", (req, res) => {

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        setInterval(() => {
            res.write(`data: ${JSON.stringify({
                time: new Date().toISOString()
            })}\n\n`);
        }, 3000);
    });

    const PORT = Number(process.env.SSE_PORT || 4000);

    app.listen(PORT, () => {
        console.log(`SSE Server running on port ${PORT}`);
    });
};