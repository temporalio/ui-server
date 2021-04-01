import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import "./App.css";
import { Namespaces, Account } from "features/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Account />
          <Switch>
            <Route path={["/namespaces/:namespace", "/namespaces"]}>
              <Namespaces />
            </Route>
            <Route exact path="/">
              <Redirect to="/namespaces" />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
