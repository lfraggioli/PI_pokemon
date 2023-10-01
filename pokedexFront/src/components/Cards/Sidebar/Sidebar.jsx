import React from "react";
import { Link, useLocation } from "react-router-dom";

import { NavItem, NavList, NavWrapper } from "./styledSidebar";

const SideBar = () => {
  const location = useLocation();
  return (
    <NavWrapper>
      <NavList>
        {location.pathname !== "/types" && (
          <Link to="/types">
            <NavItem>Filtrar por tipos</NavItem>
          </Link>
        )}

        {location.pathname !== "/origin" && (
          <Link to="/origin">
            <NavItem>Filtrar por origen</NavItem>
          </Link>
        )}
        {location.pathname !== "/order" && (
          <Link to="/order">
            <NavItem>Ordenar y filtrar</NavItem>
          </Link>
        )}
      </NavList>
    </NavWrapper>
  );
};

export default SideBar;
