import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod"; // You already have this in your package.json!

// 1. Create the server instance
const server = new McpServer({
    name: "my-first-mcp-server",
    version: "1.0.0",
});

// 2. Register a tool using the new helper (it uses Zod automatically!)
server.tool(
    "get_project_summary",
    "Lists all files in the current directory",
    {
        // If you had arguments, you'd define them here with Zod
        // e.g., folder: z.string()
    },
    async () => {
        const fs = await import("node:fs");
        const files = fs.readdirSync(process.cwd());
        return {
            content: [{ type: "text", text: `Files: ${files.join(", ")}` }]
        };
    }
);

// 3. Connect using the same transport logic
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
}

main().catch(console.error);