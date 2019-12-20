import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/BubblePage";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute path="/protected" component={BubblePage} />
        </Switch>
      </div>
  );
}

export default App;
