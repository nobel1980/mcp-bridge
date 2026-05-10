// src/schemas/toolSchemas.ts

import { z } from "zod";

export const readLogsSchema = z.object({
    date: z.string(),
});

export type ReadLogsInput = z.infer<typeof readLogsSchema>;