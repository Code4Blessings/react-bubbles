import React, { BrowserRouter as Router} from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>, rootElement);
