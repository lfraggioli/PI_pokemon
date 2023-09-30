import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Div2, ItemLi, Lista, NavStyle } from "./styledNav";

function Nav(props) {
  const { isRendered } = props;

  return (
    <NavStyle className={isRendered ? "" : "inactive"}>
      <Div2>
        <Lista>
          <Link to="/home">
            <ItemLi>Home</ItemLi>
          </Link>
          <Link to="/about">
            <ItemLi>about me</ItemLi>
          </Link>
          <Link to="/create">
            <ItemLi>create</ItemLi>
          </Link>
          <Link to="/list">
            {" "}
            <ItemLi>Pokemon List</ItemLi>
          </Link>
        </Lista>
      </Div2>
    </NavStyle>
  );
}

export default Nav;
