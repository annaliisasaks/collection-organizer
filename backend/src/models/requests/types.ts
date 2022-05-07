export interface TypedRequestBody<T = any> extends Express.Request {
    body?:  T,
    files?: any[],
    params: { id?: string }
}


export interface TypedRequestParams extends Express.Request {
    params: { id?: string },
    query: { page?: number, property?: string, value?: string }
}
