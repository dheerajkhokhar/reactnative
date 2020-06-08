import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStyle from "../config/styles";

const AppText = ({ children, style }) => {
    return <Text style={[defaultStyle.text, style]}>{children}</Text>;
};

export default AppText;
