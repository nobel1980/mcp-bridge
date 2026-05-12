import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RestartServiceSchema } from "./schemas/devops.schemas.js";
import { logger } from "../../../utils/logger.js";

export function registerRestartServiceTool(server: McpServer) {
    server.tool(
        "restart_service",
        RestartServiceSchema.shape,
        async ({ serviceName }) => {
            try {
                // This is a placeholder for actual service restart logic
                // In a real scenario, this might call a system command or another service
                logger.info(`[DEVOPS] Restart requested for service: ${serviceName}`);
                
                return {
                    content: [{
                        type: "text",
                        text: `Restart request for service '${serviceName}' has been received and logged. (Note: actual service management requires system-level permissions).`
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error processing restart for ${serviceName}: ${error.message}`
                    }]
                };
            }
        }
    );
}