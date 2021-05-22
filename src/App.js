import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
import Home from "./components/home/home";
import Team from "./components/team/team";
import Events from "./components/events/events";
import Memoirs from "./components/memoirs/memoirs";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/memoirs">
            <Memoirs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
