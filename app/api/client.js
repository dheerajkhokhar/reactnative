// // import { create } from "apisauce";

// // create({ baseURL: "http://192.168.43.63:9005/api" });

// import { create } from "apisauce";

// const instance = create({
//     // baseURL: "http://192.168.43.63:9005/api"
//     baseURL: "http://192.168.0.106:9005/api"
// });

// export default instance;

import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const instance = create({
    // baseURL: "http://192.168.43.63:9005/api"
    baseURL: "http://192.168.0.106:9005/api"
});

apiClient.addAsyncRequestTransform(async request => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = instance.get;
instance.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

export default instance;
