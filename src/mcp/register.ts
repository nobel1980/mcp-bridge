import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerResources } from "./resources/index.js";
import { registerPrompts } from "./prompts/index.js";
import { registerFilesystemTools }
    from "./tools/filesystem/index.js";

import { registerDockerTools }
    from "./tools/docker/index.js";

import { registerMonitoringTools }
    from "./tools/monitoring/index.js";

import { registerDatabaseTools }
    from "./tools/database/index.js";

import { registerDevopsTools }
    from "./tools/devops/index.js";

export function registerAll(server: McpServer) {

    registerResources(server);

    registerFilesystemTools(server);

    registerDockerTools(server);

    registerMonitoringTools(server);

    registerDatabaseTools(server);

    registerDevopsTools(server);

    registerPrompts(server);
}