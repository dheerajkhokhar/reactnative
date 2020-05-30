import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import BackgroundImage from "../assets/background.jpg";
import Logo from "../assets/logo-red.png";
import colors from "../config/colors";

const WelcomeScreen = props => {
    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: "absolute",
        top: "10%",
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    }
});

export default WelcomeScreen;
