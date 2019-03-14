import React, { Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import page from "./components/page";
import page1 from "./components/page1";
import page2 from "./components/page2";
import api from "./components/apipage";

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={page} />
        <Route path="/page1" component={page1} />
        <Route path="/form" component={page2} />
        <Route path="/api" component={api} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App;