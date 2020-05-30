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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";

export default function App() {
    // console.log(Dimensions.get("screen"));
    console.log(useDimensions(), useDeviceOrientation());

    const { landscape } = useDeviceOrientation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <AppText>I Love React Native</AppText>
            <MaterialCommunityIcons>
                <MaterialCommunityIcons name="email" size={24} color="dodgerblue" />
            </MaterialCommunityIcons>
        </View>
    );
}

// padding
{
    /* <View
    style={{
        width: 100,
        height: 100,
        backgroundColor: "dodgerblue"
    }}
>
    <View style={{ width: 50, height: 50, backgroundColor: "gold", margin: 10 }}></View>
</View>; */
}

// borderWidth: 10,
//     borderColor: "royalblue",
//     borderRadius: 50
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
