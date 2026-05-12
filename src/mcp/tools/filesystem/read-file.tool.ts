import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fileService } from "../../../services/fileService.js";
import { ReadFileSchema } from "./schemas/filesystem.schemas.js";

export function registerReadFileTool(server: McpServer) {
    server.tool(
        "read_file",
        ReadFileSchema.shape,
        async ({ filePath }) => {
            try {
                const file = await fileService.readFile(filePath);
                return {
                    content: [{
                        type: "text",
                        text: file.content
                    }]
                };
            } catch (error: any) {
                return {
                    isError: true,
                    content: [{
                        type: "text",
                        text: `Error reading file: ${error.message}`
                    }]
                };
            }
        }
    );
}