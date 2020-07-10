import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { connect } from "react-redux";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import * as actions from "../store/actions";
import ActivityIndicator from "../components/ActivityIndicator";
import Errors from "../components/Errors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = props => {
    const { navigation, error, loading, authToken } = props;

    const handleSubmit = (auth, { resetForm }) => {
        props.login(auth.email, auth.password);
        // resetForm();
    };

    const errorHandler = () => {
        console.log(navigation);
        navigation.navigate(routes.LOGIN, item);
    };
    return (
        <Screen style={styles.container}>
            {loading && <ActivityIndicator visible={loading}></ActivityIndicator>}
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <ErrorMessage error="Invalid email and/or password." visible={error} />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});

const mapStateToProps = state => {
    return {
        authToken: state.auth.authToken,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const mapDispatcherToProps = dispatcher => {
    return {
        login: (email, password) => dispatcher(actions.login(email, password))
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(LoginScreen);
