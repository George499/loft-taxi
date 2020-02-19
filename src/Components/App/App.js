import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Login/Login";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileFetch } from "../../Redux/Actions/Actions";

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
  const getProfileFetch = props.getProfileFetch;

  useEffect(() => {
    getProfileFetch();
  });

  if (isLoggedIn) {
    return (
      <>
        <Header pages={pages} />
        <Switch>
          <Redirect from="/login" to="/map" />
          <Redirect exact from="/" to="/map" />
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

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
