export declare class FetchError extends Error {
    status: number;
    constructor(code: number, message?: string);
}
export declare function http<T>(request: RequestInfo): Promise<T>;
export declare function get<T>(path: string, requestInit?: RequestInit): Promise<T>;
export declare function post<T>(path: string, body: any, requestInit?: RequestInit): Promise<T>;
export declare function put<T>(path: string, body: any, requestInit?: RequestInit): Promise<T>;
