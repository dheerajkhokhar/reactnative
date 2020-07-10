import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async authToken => {
    try {
        const response = await SecureStore.setItemAsync(key, authToken);
        return response;
    } catch (error) {
        return { isError: true, error: error };
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
};

const getToken = async () => {
    try {
        const response = await SecureStore.getItemAsync(key);
        return response;
    } catch (error) {
        return { isError: true, error: error };
    }
};

const clearToken = async () => {
    try {
        const response = await SecureStore.deleteItemAsync(key);
        return response;
    } catch (error) {
        return { isError: true, error: error };
    }
};

export default { storeToken, getToken, clearToken, getUser };
