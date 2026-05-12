export interface FileInfo {
    name: string;
    path: string;
    isDirectory: boolean;
    size?: number;
    extension?: string;
}

export interface FileContent {
    content: string;
    encoding: string;
    path: string;
}
