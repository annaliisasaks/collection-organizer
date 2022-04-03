export interface TypedRequestBody<T = any> extends Express.Request {
    body?:  T,
    file?: any,
    params: { id?: string }
}


export interface TypedRequestParams extends Express.Request {
    params: { id?: string }
}