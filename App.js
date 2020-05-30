import React from "react";
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Alert,
    StatusBar,
    Platform
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
    // console.log(Dimensions.get("screen"));
    console.log(useDimensions(), useDeviceOrientation());

    const { landscape } = useDeviceOrientation();
    return (
        <View style={styles.container}>
            {/* <WelcomeScreen></WelcomeScreen> */}
            <ViewImageScreen></ViewImageScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
