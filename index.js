import React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./app/App";

export default Index = () => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    );
};
