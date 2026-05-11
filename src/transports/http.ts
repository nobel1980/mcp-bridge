import express from "express";

import { StreamableHTTPServerTransport }
    from "@modelcontextprotocol/sdk/server/streamableHttp.js";

import { createMcpServer } from "../mcp/server.js";

export async function startHttpServer() {

    const app = express();

    app.use(express.json());

    app.post("/mcp", async (req, res) => {

        try {

            const transport =
                new StreamableHTTPServerTransport();

            const server = createMcpServer();

            await server.connect(transport);

            await transport.handleRequest(req, res);

        } catch (error) {

            console.error(error);

            if (!res.headersSent) {
                res.status(500).json({
                    error: "Internal MCP Error"
                });
            }
        }
    });

    const PORT = Number(process.env.MCP_PORT || 3000);

    app.listen(PORT, () => {
        console.error(`🚀 MCP HTTP running on ${PORT}`);
    });
}