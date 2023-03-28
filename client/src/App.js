import "./App.css";
import React from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PizzasContextProvider } from "./providers/PizzasProvider";

function App() {
  return (
    <div className="App">
      <PizzasContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
          </Switch>
        </Router>
      </PizzasContextProvider>
    </div>
  );
}

export default App;
