import React, { useState } from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 }
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return <ListingEditScreen></ListingEditScreen>;
}
