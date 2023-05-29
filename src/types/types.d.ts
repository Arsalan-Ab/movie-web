interface QueryParams {
    id?: number;
    page?: number;
    limit?: number;
    sort?: string;
    order?: "asc" | "desc" | string;
    q?: string;
    [key: string]: any;
}
