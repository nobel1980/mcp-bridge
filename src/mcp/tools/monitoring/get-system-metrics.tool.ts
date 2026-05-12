import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { monitoringService } from "../../../services/monitoring.service.js";
import { GetSystemMetricsSchema } from "./schemas/monitoring.schemas.js";

export function registerGetSystemMetricsTool(server: McpServer) {
    server.tool(
        "system_metrics",
        GetSystemMetricsSchema.shape,
        async () => {
            try {
                const metrics = monitoringService.getFullReport();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(metrics, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error fetching system metrics: ${error.message}`
                    }]
                };
            }
        }
    );
}
