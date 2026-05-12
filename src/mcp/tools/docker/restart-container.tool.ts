import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { dockerService } from "../../../services/docker.service.js";
import { RestartContainerSchema } from "./schemas/docker.schemas.js";
import { dockerGuard } from "./guards/docker.guard.js";

export function registerRestartContainerTool(server: McpServer) {
    server.tool(
        "docker_restart",
        RestartContainerSchema.shape,
        async ({ containerId }) => {
            const validation = dockerGuard.validateAction(containerId, "restart");
            if (!validation.valid) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: validation.error || "Action denied"
                    }]
                };
            }

            try {
                const result = await dockerService.restartContainer(containerId);
                return {
                    content: [{
                        type: "text",
                        text: `Successfully restarted container ${containerId}. Output: ${result}`
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error restarting container ${containerId}: ${error.message}`
                    }]
                };
            }
        }
    );
}
