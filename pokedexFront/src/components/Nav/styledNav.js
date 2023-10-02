import { styled } from "styled-components";

export const Lista = styled.ul`
  list-style: none;
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemLi = styled.li`
  font-size: 1em;
  text-shadow: 1px 1px 1px black;
  font-family: "Dela Gothic One", cursive;
  color: white;
  cursor: pointer;
  font-weight: 500;
  text-transform: lowercase;
  padding: 0.75em;
  margin-left: 1em;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #831010;
    text-shadow: 1px 2px 2px #d53141;
  }
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0;
  padding-left: 0.5em;
  left: 5%;
`;
export const LogoCenter = styled.img`
  width: 100px;
  margin: 0;
  align-self: center;
`;

export const NavStyle = styled.nav`
  background-color: #d53141;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  z-index: 5;
  &.inactive {
    display: none;
  }
`;

export const Div2 = styled.div`
  display: flex;
  max-width: 100%;
  width: 1384px;
  flex-direction: row;
  align-items: flex-start;
  align-self: center;
  justify-content: space-evenly;
  /* Center horizontally and vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`;
