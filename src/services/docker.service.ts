import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export class DockerService {

    async listContainers() {

        try {

            const { stdout } = await execAsync("docker ps --format '{{json .}}'");

            return stdout
                .split("\n")
                .filter(Boolean)
                .map(line => JSON.parse(line));

        } catch (err: any) {

            console.error("[DOCKER] Failed to list containers", err.message);

            throw err;
        }
    }

    async getContainerLogs(containerId: string, lines = 50) {

        try {

            const { stdout } = await execAsync(
                `docker logs --tail ${lines} ${containerId}`
            );

            return stdout;

        } catch (err: any) {

            console.error("[DOCKER] Log error:", err.message);

            throw err;
        }
    }

    async getSystemInfo() {

        try {

            const { stdout } = await execAsync("docker info");

            return stdout;

        } catch (err: any) {

            return `Docker not available: ${err.message}`;
        }
    }

    async restartContainer(containerId: string) {

        try {

            const { stdout } = await execAsync(
                `docker restart ${containerId}`
            );

            return stdout;

        } catch (err: any) {

            throw err;
        }
    }
}

export const dockerService = new DockerService();