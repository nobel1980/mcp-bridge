import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { z } from "zod";

import { projectService }
    from "../../services/project.service.js";

export function registerReadFileTool(
    server: McpServer
) {

    server.tool(
        "read_file",

        {
            path: z
                .string()
                .describe("Absolute file path")
        },

        async ({ path }) => {

            try {

                const content =
                    await projectService.readFileContent(path);

                return {
                    content: [{
                        type: "text",
                        text: content
                    }]
                };

            } catch (error: any) {

                return {
                    content: [{
                        type: "text",
                        text: error.message
                    }],
                    isError: true
                };
            }
        }
    );
}