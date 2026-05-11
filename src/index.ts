import "dotenv/config";

import { startHttpServer } from "./transports/http.js";
import { startStdioServer } from "./transports/stdio.js";
import { startSseServer } from "./transports/sse.js";
import { startRestApi } from "./api/rest.js";

// async function bootstrap() {
//     // Priority: Command line arg OR .env file OR default to stdio
//     const mode = process.env.TRANSPORT || "stdio";

//     console.error(`[BOOTSTRAP] Initializing in ${mode} mode...`);

//     if (mode === "http") {
//         await startHttpServer();
//     } else {
//         await startStdioServer();
//     }
// }

async function bootstrap() {

    await Promise.all([
        startHttpServer(),
        startStdioServer(),
        startRestApi(),
        startSseServer(),

    ]);

    console.error("All transports started");
}

// Global Lifecycle Handlers
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