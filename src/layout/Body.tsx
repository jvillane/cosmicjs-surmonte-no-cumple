import React from "react";
import {Container} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";

export default function Body() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
