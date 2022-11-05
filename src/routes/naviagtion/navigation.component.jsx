import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContainer, Nav, NavLink, MainContainer } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <MainContainer>
        <NavigationContainer>
          <NavLink to="/">
            <h1>Haus</h1>
          </NavLink>
          <Nav>
            <NavLink to="/store">
                <h2>Store</h2>
            </NavLink>
            <NavLink to="/">
                <h2>Starter Kit</h2>
            </NavLink>
            <NavLink to="/about">
                <h2>About</h2>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/auth">
                <h2>Sign in</h2>
            </NavLink>
            <NavLink to="/cart">
                <h2>Cart</h2>
            </NavLink>
          </Nav>
        </NavigationContainer>
      </MainContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
