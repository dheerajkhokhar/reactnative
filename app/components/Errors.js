import React from "react";
import { View, StyleSheet } from "react-native";
import ActivityIndicator from "./ActivityIndicator";
import AppText from "./AppText";
import AppButton from "./AppButton";

const Errors = ({ text, onPress }) => {
    return (
        <View style={styles.error}>
            <ActivityIndicator visible={true} type="error"></ActivityIndicator>
            <AppText>{text}</AppText>
            <AppButton title="Retry" onPress={onPress}></AppButton>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

export default Errors;
