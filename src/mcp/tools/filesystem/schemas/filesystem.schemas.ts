import { z } from "zod";

export const ListFilesSchema = z.object({
    dirPath: z.string().optional().default(".").describe("The relative path to list files from")
});

export const ReadFileSchema = z.object({
    filePath: z.string().describe("The relative path of the file to read")
});

export const ProjectSummarySchema = z.object({});
