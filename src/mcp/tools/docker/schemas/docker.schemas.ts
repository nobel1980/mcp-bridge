import { z } from "zod";

export const ListContainersSchema = z.object({});

export const GetContainerLogsSchema = z.object({
    containerId: z.string().describe("The ID or name of the container"),
    tail: z.number().optional().default(50).describe("Number of lines to show from the end of the logs")
});

export const RestartContainerSchema = z.object({
    containerId: z.string().describe("The ID or name of the container to restart")
});
