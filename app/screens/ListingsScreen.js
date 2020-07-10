import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import Screen from "../components/Screen";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import * as actions from "../store/actions";
import ActivityIndicator from "../components/ActivityIndicator";
import Errors from "../components/Errors";

const ListingsScreen = props => {
    // const disptach = useDispatch();

    // const pageType = useSelector(state => state.listings);
    const { navigation, listings, loading, error } = props;
    const onGetLists = () => {
        props.onGetLists();
    };

    useEffect(() => {
        // disptach(actions.getlists());
        onGetLists();
    }, []);
    return (
        <Screen style={styles.screen}>
            {error && <Errors text="Couldn't retrieve the listings." onPress={onGetLists}></Errors>}
            {loading && <ActivityIndicator visible={loading}></ActivityIndicator>}
            {!error && !loading && (
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    )}
                />
            )}
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: defaultStyles.colors.light
    },
    error: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

const mapStateToProps = state => {
    return {
        listings: state.listings.listings,
        error: state.listings.error,
        loading: state.listings.loading
    };
};

const mapDispatcherToProps = dispatcher => {
    return {
        onGetLists: () => dispatcher(actions.getlists())
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(ListingsScreen);
