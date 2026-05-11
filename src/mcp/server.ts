import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { projectService } from "../services/project.service.js";
import { registerAll } from "./register.js";


export function createMcpServer() {

    const server = new McpServer({
        name: "project-context-server",
        version: "1.0.0",
    });

    registerAll(server);

    return server;
}