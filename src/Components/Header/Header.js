import React from "react";
import { useContextLogin } from "../Context/Context";
import "./Header.scss";
import { Logo } from "loft-taxi-mui-theme";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Header = props => {
  Header.propTypes = {
    pages: PropTypes.array
  };

  const { logout } = useContextLogin();

  const link =
    Array.isArray(props.pages) &&
    props.pages.map((page, index) => {
      return (
        <li key={index}>
          <NavLink to={page.name} className="nav">
            <Button
              onClick={() => {
                if (page.name === "login") {
                  logout();
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

export default Header;
