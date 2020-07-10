import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} tint="light" preview={{ uri: thumbnailUrl }} uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    subTitle: {
        color: defaultStyles.colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
});

export default Card;
