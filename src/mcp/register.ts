import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerTools } from "./tools/index.js";
import { registerResources } from "./resources/index.js";
import { registerPrompts } from "./prompts/index.js";

export function registerAll(server: McpServer) {

    registerTools(server);

    registerResources(server);

    registerPrompts(server);
}