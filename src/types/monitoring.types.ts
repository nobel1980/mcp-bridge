export interface SystemHealth {
    platform: string;
    nodeVersion: string;
    uptime: number;
    timestamp: string;
}

export interface MemoryUsage {
    rss: string;
    heapTotal: string;
    heapUsed: string;
    external: string;
}

export interface CPUInfo {
    cores: number;
    loadAvg: number[];
    arch: string;
    model?: string;
}

export interface MonitoringReport {
    system: SystemHealth;
    memory: MemoryUsage;
    cpu: CPUInfo;
    freeMem: string;
    totalMem: string;
}
