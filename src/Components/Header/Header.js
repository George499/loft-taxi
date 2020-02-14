import React from "react";
import "./Header.scss";
import { Logo } from "loft-taxi-mui-theme";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  const logout = props.logout;

  Header.propTypes = {
    pages: PropTypes.array
  };

  const logExit = () => logout();

  const link =
    Array.isArray(props.pages) &&
    props.pages.map((page, index) => {
      return (
        <li key={index}>
          <NavLink to={page.name} className="nav">
            <Button
              onClick={() => {
                if (page.name === "login") {
                  logExit();
                }
              }}
              data-page={page.name}
              color="primary"
              style={{ marginRight: "5px" }}
            >
              <span data-page={page.name}>{page.text}</span>
            </Button>
          </NavLink>
        </li>
      );
    });

  return (
    <>
      <div className="header">
        <Logo />
        <ul className="navList">{link}</ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { logout: state.logout };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
