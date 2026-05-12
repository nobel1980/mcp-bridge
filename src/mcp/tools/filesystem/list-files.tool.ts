import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fileService } from "../../../services/fileService.js";
import { ListFilesSchema } from "./schemas/filesystem.schemas.js";

export function registerListFilesTool(server: McpServer) {
    server.tool(
        "list_files",
        ListFilesSchema.shape,
        async ({ dirPath }) => {
            try {
                const files = await fileService.listFiles(dirPath);
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify(files, null, 2)
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error listing files: ${error.message}`
                    }]
                };
            }
        }
    );
}