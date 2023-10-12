import styled, { keyframes } from "styled-components";
import loader from "../../Loader/pokeball.png";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;
const colorButton = {
  rgba: "rgba(0, 0, 0, 0.5)",
};
const typeColors = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#D9E82B",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#68A090",
  shadow: "#5E637F",
  todos: "white",
};

export const FilterButton = styled.button`
  background-color: ${(props) =>
    props.active ? typeColors[props.type] : colorButton.rgba};
  color: ${(props) => (props.active ? "black" : "white")};
  border: none;
  border-radius: 5px;
  padding: 1em 1.2rem;
  width: auto;
  max-width: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => typeColors[props.type]};
    color: black;
  }
`;
export const ButtonText = styled.span`
  font-size: 1em;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
`;
export const DivButton = styled.div`
  display: row;
  align-items: center;
  top: 50%;
  margin: 5em auto 0;
  padding-top: 1em;
  z-index: 3;
`;

export const SearchOverlay = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: auto;
  min-width: 700px;
  border-radius: 5%;
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.8);
  min-height: 800px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  padding: 10px;
  position: absolute;
  font-size: 16px;
  top: 1em;
  right: 1em;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: #f5f5f5;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  font-size: x-large;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.image`
  border: none;

  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
