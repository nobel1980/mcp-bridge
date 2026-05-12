import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { databaseService } from "../../../services/database.service.js";
import { GetDatabaseStatusSchema } from "./schemas/database.schemas.js";

export function registerGetDatabaseStatusTool(server: McpServer) {
    server.tool(
        "get_database_status",
        GetDatabaseStatusSchema.shape,
        async () => {
            const status = await databaseService.getStatus();
            return {
                content: [{
                    type: "text",
                    text: JSON.stringify(status, null, 2)
                }]
            };
        }
    );
}
