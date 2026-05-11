import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerProjectSummaryTool }
    from "./project-summary.tool.js";

import { registerReadFileTool }
    from "./read-file.tool.js";

export function registerTools(server: McpServer) {

    registerProjectSummaryTool(server);

    registerReadFileTool(server);
}