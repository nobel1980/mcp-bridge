import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerRestartServiceTool }
    from "./restart-service.tool.js";

export function registerDevopsTools(
    server: McpServer
) {

    registerRestartServiceTool(server);
}