import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerAnalyzeProjectPrompt }
    from "./analyze-project.prompt.js";

export function registerPrompts(server: McpServer) {

    registerAnalyzeProjectPrompt(server);
}