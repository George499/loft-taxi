import React from "react";
import { useContextLogin } from "../Context/Context";
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Login/Login";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

const pages = [
  {
    name: "profile",
    text: "Профиль"
  },
  {
    name: "map",
    text: "Карта"
  },
  {
    name: "login",
    text: "Выйти"
  }
];

function App(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return (
      <>
        <Header pages={pages} />
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />
          <Route path="/map" component={Map} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Route path="/login" component={Login} />
        <Redirect exact from="/" to="/login" />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
