export declare enum ItemsatisErrorCode {
    INVALID_TOKEN = 422
}
export declare const ERROR_DESCRIPTIONS: Record<number, string>;
export type ApiResult<T> = {
    ok: true;
    data: T;
} | {
    ok: false;
    code: ItemsatisErrorCode | number;
    message: string;
    rawMessage: string;
};
export declare function mapApiError(errCode: number, rawMessage: string): ApiResult<never>;
//# sourceMappingURL=merchantErrorHandler.d.ts.map