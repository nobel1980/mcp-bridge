import { logger } from "../../../../utils/logger.js";

export class SqlGuard {
    private readonly selectOnlyKeywords = [
        "DROP", "DELETE", "TRUNCATE", "ALTER", "GRANT", "REVOKE", "UPDATE", "INSERT", "CREATE"
    ];

    validateSelectOnly(sql: string): { valid: boolean; error?: string } {
        const upperSql = sql.toUpperCase().trim();

        if (!upperSql.startsWith("SELECT") && !upperSql.startsWith("SHOW") && !upperSql.startsWith("DESCRIBE")) {
            return {
                valid: false,
                error: "Only SELECT, SHOW, and DESCRIBE queries are allowed for this tool."
            };
        }

        for (const keyword of this.selectOnlyKeywords) {
            // Using regex to match whole words only to avoid false positives (e.g., "created_at" containing "CREATE")
            const regex = new RegExp(`\\b${keyword}\\b`, "i");
            if (regex.test(upperSql)) {
                logger.warn(`[SQL_GUARD] Restricted keyword detected: ${keyword}`, { sql });
                return {
                    valid: false,
                    error: `Query contains restricted keyword: ${keyword}`
                };
            }
        }

        return { valid: true };
    }
}

export const sqlGuard = new SqlGuard();
