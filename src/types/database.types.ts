export interface DatabaseStatus {
    status: "connected" | "disconnected";
    db?: string;
    timestamp: string;
    error?: string;
}

export interface TableInfo {
    tableName: string;
}

export interface ColumnInfo {
    Field: string;
    Type: string;
    Null: string;
    Key: string;
    Default: any;
    Extra: string;
}

export interface QueryResult {
    rows: any[];
    fields?: any[];
}
