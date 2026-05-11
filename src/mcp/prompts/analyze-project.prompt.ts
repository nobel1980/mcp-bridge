import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

import { z } from "zod";

export function registerAnalyzeProjectPrompt(
    server: McpServer
) {

    server.prompt(
        "analyze_project",

        {
            dir: z
                .string()
                .optional()
                .describe("Directory path"),
        },

        ({ dir }) => ({

            messages: [{
                role: "user",

                content: {
                    type: "text",

                    text:
                        `Analyze the project located at ${dir || "."}

Provide:
1. Architecture overview
2. Main technologies
3. File structure
4. Security concerns
5. Performance improvements
6. Refactoring suggestions`
                }
            }]
        })
    );
}