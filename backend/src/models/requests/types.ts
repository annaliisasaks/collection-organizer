export interface TypedRequestBody<T = any> extends Express.Request {
    body?:  T,
}
