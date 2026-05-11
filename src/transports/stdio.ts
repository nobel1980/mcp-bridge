import { StdioServerTransport }
    from "@modelcontextprotocol/sdk/server/stdio.js";

import { createMcpServer }
    from "../mcp/server.js";

export async function startStdioServer() {

    const server = createMcpServer();

    const transport =
        new StdioServerTransport();

    server.server.onerror = (error) => {
        console.error("[MCP Error]:", error);
    };

    process.on("SIGINT", async () => {
        await server.close();
        process.exit(0);
    });

    try {

        await server.connect(transport);

        console.error(
            "🚀 MCP Server running on stdio"
        );

    } catch (error) {

        console.error(
            "STDIO startup failed",
            error
        );

        process.exit(1);
    }
}