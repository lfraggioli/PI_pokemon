import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10em;
  padding-top: 2em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 50%;
  padding-top: 3em;
  margin-top: 5em;
  margin-bottom: 2em;
`;
export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  font-family: "Lato", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  z-index: 2;
  padding-top: 0em;
  margin-top: 1em;
  top: 50%;
  bottom: 0;
  position: relative;
`;
export const ParentContainer = styled.div`
  position: relative;
  height: auto;
`;

export const OrderContainer = styled.div`
  display: flex;
  left: 50%;

  padding-bottom: 2em;
  transform: translate(-50%);
  position: absolute;
  z-index: 0;
`;
