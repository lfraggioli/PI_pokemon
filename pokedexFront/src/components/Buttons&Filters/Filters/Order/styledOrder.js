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
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
`;
export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  color: #ffff;
  font-weight: 900;
  margin-bottom: 5px;
  text-align: center;
  text-shadow: 2px 2px 2px black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  z-index: 2;
  padding-top: 0em;
  top: 50%;
  margin-bottom: 10%;
  position: relative;
`;
export const ParentContainer = styled.div`
  position: relative;
  height: auto;
  top: 12%;
`;

export const OrderContainer = styled.div`
  display: flex;
  left: 50%;
  flex-direction: column;
  margin-top: 2em;
  padding-top: 2em;
  padding-bottom: 1em;
  transform: translate(-50% -50%);
  position: absolute;
  z-index: 0;
`;
