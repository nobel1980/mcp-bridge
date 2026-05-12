import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "hrms",
    timezone: "Asia/Dhaka",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
