import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";

import App from './App';
import store from './store'
// import 'antd/dist/antd.css';
// import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);