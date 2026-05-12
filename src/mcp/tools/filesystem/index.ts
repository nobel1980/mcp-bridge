import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerReadFileTool }
    from "./read-file.tool.js";

import { registerListFilesTool }
    from "./list-files.tool.js";

import { registerProjectSummaryTool }
    from "./project-summary.tool.js";

export function registerFilesystemTools(
    server: McpServer
) {

    registerReadFileTool(server);

    registerListFilesTool(server);

    registerProjectSummaryTool(server);
}