import * as actionTypes from "./actionTypes";
import client from "../../api/client";

const endpoint = "/listings";

export const getItem = payload => {
    return {
        type: actionTypes.GET_LISTINGS,
        payload: payload
    };
};

export const error = payload => {
    return {
        type: actionTypes.ERROR
    };
};

export const loading = () => {
    return {
        type: actionTypes.LOADING
    };
};

export const startUploading = () => {
    return {
        type: actionTypes.START_UPLOADING
    };
};

export const uploading = payload => {
    return {
        type: actionTypes.UPLOADING_PROGRESS,
        payload: payload
    };
};

export const itemPosted = payload => {
    return {
        type: actionTypes.ITEM_POSTED,
        payload: payload
    };
};

export const getlists = () => {
    return async dispatch => {
        dispatch(loading());
        const response = await client.get(endpoint);
        if (!response.ok) {
            dispatch(error());
        } else {
            dispatch(getItem(response.data));
        }
    };
};

export const addListing = listing => {
    return async dispatch => {
        const data = new FormData();
        data.append("title", listing.title);
        data.append("price", listing.price);
        data.append("categoryId", listing.category.value);
        data.append("description", listing.description);

        listing.images.forEach((image, index) =>
            data.append("images", {
                name: "image" + index,
                type: "image/jpeg",
                uri: image
            })
        );
        if (listing.location) data.append("location", JSON.stringify(listing.location));
        dispatch(startUploading());
        const config = {
            onUploadProgress: progress => dispatch(uploading(progress.loaded / progress.total))
        };
        // onUploadProgress(progress.loaded / progress.total)
        const response = await client.post(endpoint, data, config);
        if (!response.ok) {
            dispatch(error());
        } else {
            dispatch(itemPosted(response.data));
        }
    };
};

export const resetListing = () => {
    return {
        type: actionTypes.RESET_FORM
    };
};
