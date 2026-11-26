import axios from "axios"
import { ItemsatisErrorCode, mapApiError } from "../../../helpers/merchant/merchantErrorHandler.js"

type checkLogin = {
    request: {
        token: string
    }
    response:{
        success:boolean,
        message: string,
        err: number,
        mobile_check:boolean,
        result:{
            Id: number,
            UserName: string,
            MailAdress: string,
            Avatar: string,
            Cover: string,
            Balance: number,
            Phone: number,
            Name: string,
            SurName: string,
            PhoneVerify: number,
            UserType: number,
            Approved: number,
            PositiveRep: number,
            RegisterDate: string,
            Birthday: string,
            BirthdayMd: string,
            MailVerify: boolean,
            IdentityVerify: boolean,
            isChat: boolean,
            checkStreamer: boolean,
            firstStreamer: boolean,
            AvatarFrame: string,
            isCorporte: boolean,
            salesCount: number,
            isSellerPanelAccess: boolean,
            isStorePrivileged: boolean,
            canAccessPanel: boolean,
            risklyProduct: number
        }
        token: string,
        SocketToken: string,
        isBirthday: boolean
    }
}

export async function requestLoginFromMerchantToken(token: checkLogin["request"]["token"]){
    const formData = new FormData();
    formData.append("token", token)
    try {
        const {data} = await axios.post<checkLogin["response"]>(
            "https://www.itemsatis.com/api/checkLogin",
            formData
        );

        if(!data.success){
            return mapApiError(data.err, data.message)
        }
        return data;
        
    } catch (error) {
        console.log('req failed')
    }
}
