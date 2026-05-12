import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGetDatabaseStatusTool } from "./get-database-status.tool.js";
import { registerListDatabaseTablesTool } from "./list-database-tables.tool.js";
import { registerDescribeDatabaseTableTool } from "./describe-database-table.tool.js";
import { registerRunSelectQueryTool } from "./run-select-query.tool.js";

export function registerDatabaseTools(server: McpServer) {
    registerGetDatabaseStatusTool(server);
    registerListDatabaseTablesTool(server);
    registerDescribeDatabaseTableTool(server);
    registerRunSelectQueryTool(server);
}