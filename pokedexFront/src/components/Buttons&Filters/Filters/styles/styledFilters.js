import styled from "styled-components";

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
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 0%;
  justify-content: center;
  align-items: center;
  top: 30%;
  margin-left: 250px;
  margin-top: 3em;
  padding-top: 1em;
`;
