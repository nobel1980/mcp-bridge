import express from "express";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { server } from "../mcp/server.js";

export const startHttpServer = async () => {
    const app = express();

    // CRITICAL: This parses the JSON body so req.body is populated
    // app.use(express.json());

    // 1. Initialize the modern Streamable HTTP transport
    const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // Stateless for production
    });

    // 2. Connect the MCP logic to this transport
    await server.connect(transport);

    // 3. Define the handler for the unified MCP endpoint
    const mcpHandler = async (req: express.Request, res: express.Response) => {
        try {
            console.log("Received MCP Request:", req.method, req.url, req.headers, req.body);
            await transport.handleRequest(req, res);
            console.log("Handled request successfully");
        } catch (error) {
            console.error("[HTTP Transport Error Detailed]:", error);
            res.status(500).json({ error: "Internal MCP Error", details: String(error) });
        }
    };

    // 4. Register the routes
    app.post("/mcp", mcpHandler);
    app.get("/mcp", mcpHandler);



    // 5. Start listening
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.error(`\n🚀 Modern MCP Server ready!`);
        console.error(`Streamable HTTP Endpoint: http://localhost:${PORT}/mcp`);
        console.error(`Mode: HTTP/Streamable\n`);
    });
};


