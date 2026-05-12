import "dotenv/config";

import { startHttpServer } from "./transports/http.js";
import { startStdioServer } from "./transports/stdio.js";
import { startSseServer } from "./transports/sse.js";
import { startRestApi } from "./api/rest.js";

async function bootstrap() {

    const mode = process.env.TRANSPORT || "http";

    console.error(`[BOOTSTRAP] Mode: ${mode}`);

    switch (mode) {

        case "http":
            await startHttpServer();
            break;

        case "stdio":
            await startStdioServer();
            break;

        case "all":
            await Promise.all([
                startHttpServer(),
                startRestApi(),
                startSseServer(),
            ]);
            break;

        case "dev":
            await Promise.all([
                startHttpServer(),
                startRestApi(),
                startSseServer(),
                startStdioServer(),
            ]);
            break;

        default:
            throw new Error(`Unknown transport: ${mode}`);
    }
}

bootstrap().catch((err) => {
    console.error("Fatal Error during bootstrap:", err);
    process.exit(1);
});

process.on("uncaughtException", (error) => {
    console.error("[CRITICAL] Uncaught Exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("[CRITICAL] Unhandled Rejection at:", promise, "reason:", reason);
});