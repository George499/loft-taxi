import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const ContextLogin = React.createContext(null);

export const useContextLogin = () => useContext(ContextLogin);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const login = React.useCallback(() => {
    setLoggedIn(true);
    return <Link to="/map"></Link>;
  }, []);

  const logout = React.useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <ContextLogin.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </ContextLogin.Provider>
  );
};
