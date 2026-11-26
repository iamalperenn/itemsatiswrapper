import axios from "axios";
import { ItemsatisErrorCode, mapApiError } from "../../../helpers/merchant/merchantErrorHandler.js";
export async function requestLoginFromMerchantToken(token) {
    const formData = new FormData();
    formData.append("token", token);
    try {
        const { data } = await axios.post("https://www.itemsatis.com/api/checkLogin", formData);
        if (!data.success) {
            return mapApiError(data.err, data.message);
        }
        return data;
    }
    catch (error) {
        console.log('req failed');
    }
}
//# sourceMappingURL=requestLoginFromMerchantToken.js.map