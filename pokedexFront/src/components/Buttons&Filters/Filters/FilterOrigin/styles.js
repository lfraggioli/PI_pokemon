import styled from "styled-components";

export const ParentContainer = styled.div`
  position: relative;
  height: auto;
`;

export const OriginContainer = styled.div`
  display: flex;
  left: 50%;
  top: 5%;
  padding-top: 1em;
  transform: translate(-50% -50%);
  position: absolute;
  z-index: 2;
`;
export const OriginResults = styled.div`
  left: 50%;
  top: 60%;
  padding-top: 5em;
  margin-top: 2em;
  transform: translate(-50% -50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  padding-top: 3em;
  top: 50%;
  bottom: 0;
  position: relative;
`;

export const OriginButton = styled.button`
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
