import React from "react";
import Home from "./Pages/Home.js";
import Portal from "./Portal.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/id=:id" exact component={Portal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
