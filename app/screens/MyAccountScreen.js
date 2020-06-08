import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import { FlatList } from "react-native-gesture-handler";

const userInfo = {
    title: "Dheeraj Khokhar",
    description: "khokhar_dheeraj@yahoo.co.in",
    image: require("../assets/mosh.jpg")
};

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: defaultStyles.colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: defaultStyles.colors.secondary
        }
    }
];

const MyAccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={userInfo.title}
                    subTitle={userInfo.description}
                    image={userInfo.image}
                    onPress={() => console.log(userInfo)}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                                }
                            />
                        );
                    }}
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Logout"
                    IconComponent={<Icon name="logout" backgroundColor={defaultStyles.colors.yellow}></Icon>}
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: defaultStyles.colors.light
    },
    container: {
        marginVertical: 20
    }
});

export default MyAccountScreen;
