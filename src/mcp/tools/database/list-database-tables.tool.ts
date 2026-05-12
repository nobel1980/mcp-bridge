import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { databaseService } from "../../../services/database.service.js";
import { ListDatabaseTablesSchema } from "./schemas/database.schemas.js";

export function registerListDatabaseTablesTool(server: McpServer) {
    server.tool(
        "list_database_tables",
        ListDatabaseTablesSchema.shape,
        async () => {
            try {
                const tables = await databaseService.getTables();
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(tables, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error listing tables: ${error.message}`
                    }]
                };
            }
        }
    );
}
