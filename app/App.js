import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import OfflineNotice from "./components/OfflineNotice";
import * as actions from "./store/actions";

const App = props => {
    const { isAuthenticated } = props;
    const [isReady, setIsReady] = useState(false);
    console.log("isAuthenticated - ", isAuthenticated);
    // useEffect(() => {
    //     props.onAuthCheck();
    // }, []);
    if (!isReady) {
        return <AppLoading startAsync={() => props.onAuthCheck()} onFinish={() => setIsReady(true)} />;
    }
    return (
        <>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
                {/* <AppNavigator /> */}
            </NavigationContainer>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null
    };
};

const mapDispatcherToProps = dispatcher => {
    return {
        onAuthCheck: () => dispatcher(actions.authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(App);
