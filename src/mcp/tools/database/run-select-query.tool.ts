import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { databaseService } from "../../../services/database.service.js";
import { RunSelectQuerySchema } from "./schemas/database.schemas.js";
import { sqlGuard } from "./guards/sql.guard.js";

export function registerRunSelectQueryTool(server: McpServer) {
    server.tool(
        "run_select_query",
        RunSelectQuerySchema.shape,
        async ({ sql }) => {
            const validation = sqlGuard.validateSelectOnly(sql);
            if (!validation.valid) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: validation.error || "Invalid query"
                    }]
                };
            }

            try {
                const results = await databaseService.query(sql);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(results, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Query execution error: ${error.message}`
                    }]
                };
            }
        }
    );
}
