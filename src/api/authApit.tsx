
import axios from "axios";
import {authentification} from "./auth";


const apiInstance = axios.create({
    baseURL: process.env.PUBLIC_API_URL,
});

/**
 * Before every api call, check if the token is expired
 * Renew it before the call if needed
 * if the request is the token's request itself(authenticate()),
 * ignore it to avoid infinite loop
 */
apiInstance.interceptors.request.use(async (request) => {
    //set for every request the params with the current lang
    request.params = {
        ...request.params,
    };

    if (request.url?.includes("authenticate")) return request;

    const { Authorization } = apiInstance.defaults.headers.common as {
        Authorization: string;
    };

    if (Authorization) {
        await authentification();

    }
    return request;
});


export default apiInstance;
