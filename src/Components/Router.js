import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home/HomePresenter";
import Search from "Routes/Search/Search";
import Header from "Components/Header";
import TV from "Routes/TV/TV";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
