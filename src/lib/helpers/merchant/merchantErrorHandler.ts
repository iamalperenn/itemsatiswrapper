export enum ItemsatisErrorCode {
    INVALID_TOKEN = 422,
}


export const ERROR_DESCRIPTIONS: Record<number, string> = {
    [ItemsatisErrorCode.INVALID_TOKEN]: "The token you gave is invalid."
}

export type ApiResult<T> =
    | { ok: true; data: T }

    | { ok: false; code: ItemsatisErrorCode | number; message: string; rawMessage: string };

export function mapApiError(errCode: number, rawMessage: string): ApiResult<never> {
    const knownDescription = ERROR_DESCRIPTIONS[errCode as ItemsatisErrorCode];
    return {
        ok: false,
        code: errCode,
        message: knownDescription ?? rawMessage,
        rawMessage,
    };
}
