import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { projectService } from "../services/project.service.js";

export const server = new McpServer({
    name: "project-context-server",
    version: "1.0.0",
});

// Register Tools
// Signature: .tool(name, schema, handler)
server.tool(
    "get_project_summary",
    { path: z.string().describe("Path to the directory").optional().default(".") }, // Schema + Descriptions here
    async ({ path: dirPath }) => {
        const files = await projectService.getSummary(dirPath);
        return {
            content: [{
                type: "text",
                text: `Files in ${dirPath}: ${files.join(", ")}`
            }]
        };
    }
);

// Standardize the tool signature
server.tool(
    "read_file",
    { path: z.string().describe("The absolute path to the file to read") },
    async ({ path }) => {
        try {
            const content = await projectService.readFileContent(path);
            return {
                content: [{ type: "text", text: content }]
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error reading file: ${error.message}` }],
                isError: true
            };
        }
    }
);

// Register Resources
server.resource(
    "system_info",
    "system://info",
    async (uri) => {
        return {
            contents: [{
                uri: uri.href,
                mimeType: "application/json",
                text: JSON.stringify({ os: "windows", platform: process.platform })
            }]
        };
    }
);

// Register Prompts
server.prompt(
    "analyze_project",
    { dir: z.string().describe("Directory to analyze").optional() }, // Use Zod schema for prompt args too
    ({ dir }) => ({
        messages: [{
            role: "user",
            content: {
                type: "text",
                text: `Please analyze the project at ${dir || "."}`
            }
        }]
    })
);