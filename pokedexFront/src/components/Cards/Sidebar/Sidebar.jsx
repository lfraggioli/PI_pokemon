import React from "react";
import { Link, useLocation } from "react-router-dom";

import { NavWrapper } from "./styledSidebar";

const SideBar = () => {
  const location = useLocation();
  return (
    <NavWrapper>
      <h2>SideBar</h2>
      <ul>
        {location.pathname !== "/types" && (
          <Link to="/types">
            <li>Filtrar por tipos</li>
          </Link>
        )}

        {location.pathname !== "/origin" && (
          <Link to="/origin">
            <li>Filtrar por origen</li>
          </Link>
        )}
        {location.pathname !== "/order" && (
          <Link to="/order">
            <li>Ordenar y filtrar</li>
          </Link>
        )}
      </ul>
    </NavWrapper>
  );
};

export default SideBar;
