import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Cards from "./Cards";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Details from "../Details Pages/Details";

export default function Index() {
  return (
    <div>
      <h1 className="heading">Fortnite API App</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/details/:id" children={<Details />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
