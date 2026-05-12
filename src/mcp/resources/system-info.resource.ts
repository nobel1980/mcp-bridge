import { McpServer }
    from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerSystemInfoResource(
    server: McpServer
) {

    server.resource(
        "system_info",

        "system://info",

        async (uri) => {

            return {
                contents: [{
                    uri: uri.href,
                    mimeType: "application/json",

                    text: JSON.stringify({
                        platform: process.platform,
                        nodeVersion: process.version,
                        uptime: process.uptime(),
                    }, null, 2)
                }]
            };
        }
    );
}