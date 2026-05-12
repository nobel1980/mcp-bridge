import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { databaseService } from "../../../services/database.service.js";
import { DescribeDatabaseTableSchema } from "./schemas/database.schemas.js";

export function registerDescribeDatabaseTableTool(server: McpServer) {
    server.tool(
        "describe_database_table",
        DescribeDatabaseTableSchema.shape,
        async ({ tableName }) => {
            try {
                const info = await databaseService.describeTable(tableName);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(info, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error describing table ${tableName}: ${error.message}`
                    }]
                };
            }
        }
    );
}
