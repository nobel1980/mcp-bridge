import express from "express";
import cors from "cors";


// import toolRoutes from "../mcp/tools/index.js";
// import resourceRoutes from "../mcp/resources/index.js";

export const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", (_, res) => {
        res.json({
            name: "Custom MCP Server",
            status: "running",
        });
    });

    // app.use("/tools", toolRoutes);
    // app.use("/resources", resourceRoutes);

    return app;
};