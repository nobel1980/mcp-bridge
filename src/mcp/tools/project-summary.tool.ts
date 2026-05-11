import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { z } from "zod";

import { projectService }
    from "../../services/project.service.js";

export function registerProjectSummaryTool(
    server: McpServer
) {

    server.tool(
        "get_project_summary",

        {
            path: z
                .string()
                .optional()
                .default(".")
                .describe("Project directory path"),
        },

        async ({ path }) => {

            try {

                const files =
                    await projectService.getSummary(path);

                return {
                    content: [{
                        type: "text",
                        text:
                            `Files in ${path}: ${files.join(", ")}`
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