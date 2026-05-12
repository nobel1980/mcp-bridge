import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { monitoringService } from "../../../services/monitoring.service.js";
import { GetSystemHealthSchema } from "./schemas/monitoring.schemas.js";

export function registerGetSystemHealthTool(server: McpServer) {
    server.tool(
        "system_health",
        GetSystemHealthSchema.shape,
        async () => {
            try {
                const health = monitoringService.getSystemHealth();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(health, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error fetching system health: ${error.message}`
                    }]
                };
            }
        }
    );
}
