import React, { useState } from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 }
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return (
        <>
            <Screen>
                <AppPicker
                    selectedItem={category}
                    onSelectItem={item => setCategory(item)}
                    items={categories}
                    icon="apps"
                    placeholder="Category"
                />
                {/* <AppTextInput icon="email" placeholder="Email" /> */}
            </Screen>

            {/* <WelcomeScreen /> */}
            {/* <ListingsScreen /> */}
            {/* <MyAccountScreen></MyAccountScreen> */}
            {/* <MessagesScreen></MessagesScreen> */}
            {/* <ViewImageScreen /> */}
        </>
    );
}
