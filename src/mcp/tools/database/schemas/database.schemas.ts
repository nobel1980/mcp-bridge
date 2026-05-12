import { z } from "zod";

export const GetDatabaseStatusSchema = z.object({});

export const ListDatabaseTablesSchema = z.object({});

export const DescribeDatabaseTableSchema = z.object({
    tableName: z.string().describe("The name of the table to describe")
});

export const RunSelectQuerySchema = z.object({
    sql: z.string().describe("The SELECT query to execute")
});
