import * as actionTypes from "./actionTypes";
import client from "../../api/client";
import authStorage from "../../auth/storage";

const endpoint = "/auth";

export const loading = () => {
    return {
        type: actionTypes.LOADING
    };
};

export const loginSuccess = payload => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: payload
    };
};

export const loginfailed = payload => {
    return {
        type: actionTypes.LOGIN_FAILED,
        payload: payload
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const data = {
            email: email,
            password: password
        };
        dispatch(loading());
        const response = await client.post(endpoint, data);
        if (!response.ok) {
            dispatch(loginfailed());
        } else {
            const storeTokenResponse = await authStorage.storeToken(response.data);

            if (storeTokenResponse?.isError) {
                dispatch(loginfailed());
            } else {
                const loginUserData = await authStorage.getUser();
                const loginObj = {
                    authToken: response.data,
                    user: loginUserData
                };
                dispatch(loginSuccess(loginUserData));
            }
        }
    };
};

export const authCheckState = () => {
    return async dispatch => {
        const storeToken = await authStorage.getToken();
        if (storeToken && storeToken.isError) {
            dispatch(loginfailed());
        } else if (storeToken) {
            const loginUserData = await authStorage.getUser();
            const loginObj = {
                authToken: storeToken,
                user: loginUserData
            };
            dispatch(loginSuccess(loginObj));
        } else {
            dispatch(logout());
        }
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};

export const onLogout = () => {
    return async dispatch => {
        const clearStoreToken = await authStorage.clearToken();
        dispatch(logout());
    };
};
