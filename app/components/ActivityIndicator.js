import React from "react";
import LottieView from "lottie-react-native";
import loaderImage from "../assets/animations/loader.json";
import errorImage from "../assets/animations/error.json";

const ActivityIndicator = ({ visible = false, type }) => {
    if (!visible) return null;
    let constLottie = null;
    switch (type) {
        case "error":
            constLottie = <LottieView autoPlay source={errorImage}></LottieView>;
            break;
        default:
            constLottie = <LottieView autoPlay loop source={loaderImage}></LottieView>;
    }
    return constLottie;
};

export default ActivityIndicator;
