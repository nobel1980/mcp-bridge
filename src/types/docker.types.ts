export interface DockerContainer {
    ID: string;
    Names: string;
    Image: string;
    State: string;
    Status: string;
    Ports: string;
}

export interface DockerSystemInfo {
    Containers: number;
    Images: number;
    ServerVersion: string;
    OperatingSystem: string;
}
