import React from 'react';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {RootStateType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";


let renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 /*changeNewMessageText={store.changeNewMessageText.bind(store)}*//>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    renderThree(state)
})

renderThree(store.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
