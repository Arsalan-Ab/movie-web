interface QueryParams {
    id?: number;
    page?: number;
    limit?: number;
    sort?: string;
    language?: string;
    order?: "asc" | "desc" | string;
    q?: string;
    [key: string]: any;
}
