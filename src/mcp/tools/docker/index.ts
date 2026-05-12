import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerListContainersTool } from "./list-containers.tool.js";
import { registerGetContainerLogsTool } from "./get-container-logs.tool.js";
import { registerRestartContainerTool } from "./restart-container.tool.js";

export function registerDockerTools(server: McpServer) {
    registerListContainersTool(server);
    registerGetContainerLogsTool(server);
    registerRestartContainerTool(server);
}