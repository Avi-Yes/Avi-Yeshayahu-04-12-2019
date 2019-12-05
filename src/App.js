import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import FavoriteCities from "./components/favoriteCities";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/favorites" component={FavoriteCities}></Route>
        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
