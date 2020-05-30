import React from "react";
import { View, StyleSheet, Image } from "react-native";
import chairImage from "../assets/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image source={chairImage} resizeMode="contain" style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    deleteIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ViewImageScreen;
