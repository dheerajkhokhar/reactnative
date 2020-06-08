import React from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
    return (
        <>
            {/* <WelcomeScreen /> */}
            <ListingsScreen />
            {/* <MyAccountScreen></MyAccountScreen> */}
            {/* <MessagesScreen></MessagesScreen> */}
            {/* <ViewImageScreen /> */}
        </>
    );
}
