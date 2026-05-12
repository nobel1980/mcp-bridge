import { z } from "zod";

export const RestartServiceSchema = z.object({
    serviceName: z.string().describe("The name of the service to restart")
});
