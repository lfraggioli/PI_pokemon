import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(90, 90, 98, 0.1) 90%
  );

  width: 200px;
  height: calc(100vh - 50px);
  position: fixed;
  top: 30px;
  border: none;
  left: 0;
  z-index: 2;
  padding: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
`;

export const NavItem = styled.li`
  list-style: none;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  text-shadow: 1px 2px 2px black;
  color: #e8f1ff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    scale: 1.1;
  }
`;
