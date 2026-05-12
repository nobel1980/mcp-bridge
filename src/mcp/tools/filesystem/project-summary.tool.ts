import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ProjectSummarySchema } from "./schemas/filesystem.schemas.js";

export function registerProjectSummaryTool(server: McpServer) {
    server.tool(
        "project_summary",
        ProjectSummarySchema.shape,
        async () => {
            const summary = {
                name: "MCP Bridge",
                description: "Enterprise-grade MCP server for infrastructure management.",
                architecture: "Standardized TypeScript modules with service-based orchestration.",
                modules: [
                    "Database (MySQL/MariaDB with SqlGuard)",
                    "Docker (Container orchestration with DockerGuard)",
                    "Monitoring (System health and metrics)",
                    "Filesystem (Safe path-restricted file access)",
                    "DevOps (Service management)"
                ],
                security: [
                    "Zod-based input validation",
                    "Path-restricted filesystem access",
                    "Restricted SQL execution"
                ]
            };

            return {
                content: [{
                    type: "text",
                    text: JSON.stringify(summary, null, 2)
                }]
            };
        }
    );
}