import * as actionTypes from "../actions/actionTypes";
const initialState = {
    loading: true,
    listings: [],
    error: false,
    uploading: false,
    isUploaded: false,
    uploadProgress: 0
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_LISTINGS:
            // var newlist = Object.assign({}, payload);
            return {
                ...state,
                error: false,
                loading: false,
                listings: payload
            };
        case actionTypes.ERROR:
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
        case actionTypes.START_UPLOADING:
            return {
                ...state,
                uploading: true,
                error: false
            };
        case actionTypes.UPLOADING_PROGRESS:
            console.log("uploadProgress1 - ", payload);
            return {
                ...state,
                loading: true,
                uploadProgress: payload,
                error: false
            };
        case actionTypes.ITEM_POSTED:
            return {
                ...state,
                loading: false,
                isUploaded: true,
                uploading: false,
                uploadProgress: 0,
                error: false
            };
        case actionTypes.RESET_FORM:
            return {
                ...state,
                loading: false,
                isUploaded: false,
                uploading: false,
                uploadProgress: 0,
                error: false
            };
        default:
            return state;
    }
};

export default reducer;
