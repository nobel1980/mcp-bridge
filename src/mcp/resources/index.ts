import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerSystemInfoResource }
    from "./system-info.resource.js";

export function registerResources(server: McpServer) {

    registerSystemInfoResource(server);
}