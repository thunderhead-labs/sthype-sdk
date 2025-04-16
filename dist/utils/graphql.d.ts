export interface GraphQLResponse<T> {
    data?: T;
    errors?: Array<{
        message: string;
        locations?: Array<{
            line: number;
            column: number;
        }>;
        path?: string[];
    }>;
}
export declare function graphqlRequest<T>(url: string, query: string, variables?: Record<string, unknown>): Promise<T>;
