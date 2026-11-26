export var ItemsatisErrorCode;
(function (ItemsatisErrorCode) {
    ItemsatisErrorCode[ItemsatisErrorCode["INVALID_TOKEN"] = 422] = "INVALID_TOKEN";
})(ItemsatisErrorCode || (ItemsatisErrorCode = {}));
export const ERROR_DESCRIPTIONS = {
    [ItemsatisErrorCode.INVALID_TOKEN]: "The token you gave is invalid."
};
export function mapApiError(errCode, rawMessage) {
    const knownDescription = ERROR_DESCRIPTIONS[errCode];
    return {
        ok: false,
        code: errCode,
        message: knownDescription ?? rawMessage,
        rawMessage,
    };
}
//# sourceMappingURL=merchantErrorHandler.js.map