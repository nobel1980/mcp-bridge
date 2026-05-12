import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { dockerService } from "../../../services/docker.service.js";
import { ListContainersSchema } from "./schemas/docker.schemas.js";

export function registerListContainersTool(server: McpServer) {
    server.tool(
        "docker_ps",
        ListContainersSchema.shape,
        async () => {
            try {
                const containers = await dockerService.listContainers();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(containers, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error listing containers: ${error.message}`
                    }]
                };
            }
        }
    );
}
