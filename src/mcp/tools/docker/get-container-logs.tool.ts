import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { dockerService } from "../../../services/docker.service.js";
import { GetContainerLogsSchema } from "./schemas/docker.schemas.js";

export function registerGetContainerLogsTool(server: McpServer) {
    server.tool(
        "docker_logs",
        GetContainerLogsSchema.shape,
        async ({ containerId, tail }) => {
            try {
                const logs = await dockerService.getContainerLogs(containerId, tail);
                return {
                    content: [{
                        type: "text",
                        text: logs
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error fetching logs for ${containerId}: ${error.message}`
                    }]
                };
            }
        }
    );
}
