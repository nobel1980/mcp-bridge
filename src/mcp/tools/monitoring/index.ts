import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGetSystemHealthTool } from "./get-system-health.tool.js";
import { registerGetSystemMetricsTool } from "./get-system-metrics.tool.js";

export function registerMonitoringTools(server: McpServer) {
    registerGetSystemHealthTool(server);
    registerGetSystemMetricsTool(server);
}