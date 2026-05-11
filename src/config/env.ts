export const env = {
    transport: process.env.TRANSPORT || "stdio",
    port: Number(process.env.PORT || 3000),
    nodeEnv: process.env.NODE_ENV || "development",
    apiKey: process.env.API_KEY || "",
};