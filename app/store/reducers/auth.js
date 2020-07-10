import * as actionTypes from "../actions/actionTypes";
const initialState = {
    loading: false,
    user: null,
    token: null,
    error: null
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.LOGIN_SUCCESS:
            const userData = JSON.parse(JSON.stringify(payload.user));
            return {
                ...state,
                token: payload.authToken,
                user: userData,
                loading: false,
                error: true
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                loading: false,
                token: null,
                user: null
            };
        default:
            return state;
    }
};

export default reducer;
