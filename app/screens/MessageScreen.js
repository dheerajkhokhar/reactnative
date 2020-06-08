import React, { useState } from "react";
import { FlatList, StyleSheet, Platform, StatusBar, View } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
    {
        id: "1",
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: "2",
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = item => {
        const newMessage = messages.filter(message => message.id !== item.id);
        setMessages(newMessage);
        // Delete from message; //Delete from server
    };

    const updateList = () => {
        const obj = {
            id: "3",
            title: "T3",
            description: "D3",
            image: require("../assets/mosh.jpg")
        };
        const newList = messages.concat(obj);
        setMessages(newList);
    };
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => updateList()}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
});

export default MessagesScreen;
