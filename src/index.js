import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persister, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persister}>
                    <App/>
                </PersistGate>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

