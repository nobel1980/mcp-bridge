// src/resources/systemResource.ts

export const getSystemInfo = () => {
    return {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        nodeVersion: process.version,
    };
};