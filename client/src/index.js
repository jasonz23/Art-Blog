import react from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers"
import App from "./App";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>
    ,document.getElementById("root")); 