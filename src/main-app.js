import React from 'react';
import App from "./app";
import store from './store';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


class MainApp extends React.Component {

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default MainApp;
