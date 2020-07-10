import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import { FlatList } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import * as actions from "../store/actions";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: defaultStyles.colors.primary
        },
        targetScreen: routes.LISTING
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: defaultStyles.colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
];

const MyAccountScreen = props => {
    const { navigation, user } = props;
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/mosh.jpg")}
                    onPress={() => console.log(user)}
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
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        );
                    }}
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Logout"
                    IconComponent={<Icon name="logout" backgroundColor={defaultStyles.colors.yellow}></Icon>}
                    onPress={() => props.onLogout()}
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

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

const mapDispatcherToProps = dispatcher => {
    return {
        onAuthCheck: () => dispatcher(actions.authCheckState()),
        onLogout: () => dispatcher(actions.onLogout())
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(MyAccountScreen);
