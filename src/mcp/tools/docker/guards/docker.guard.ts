import { logger } from "../../../../utils/logger.js";

export class DockerGuard {
    // Example: Restricted containers that shouldn't be touched via MCP
    private readonly restrictedContainers = [
        "mcp-server", // Don't let the server restart itself via this tool if not intended
        "db-production"
    ];

    validateAction(containerId: string, action: string): { valid: boolean; error?: string } {
        if (this.restrictedContainers.includes(containerId)) {
            logger.warn(`[DOCKER_GUARD] Restricted action '${action}' attempted on container: ${containerId}`);
            return {
                valid: false,
                error: `Action '${action}' is restricted for container: ${containerId}`
            };
        }
        return { valid: true };
    }
}

export const dockerGuard = new DockerGuard();
