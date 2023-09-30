import styled from "styled-components";
export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 1em;
  padding: 2.5em;
  margin-bottom: 1.5em;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`;

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
};
export const TypeBadge = styled.div`
  padding: 5px 15px;
  margin: 0 2px;
  font-size: 10px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ type }) => typeColors[type]};
  border-radius: 5px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #b3b3b3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 120%;
  object-fit: contain;
  padding-bottom: 1em;
`;
export const ContentWrapper = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 0;
  height: 100vh;
  position: relative;
`;

export const Name = styled.h1`
  padding-top: 0.5rem;
  margin-top: 0;
  font-size: 1.7em;
  font-weight: 900;
  -webkit-text-stroke: 0.5px black;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
`;
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  top: 0;
  line-height: 1.2em;
  font-family: "Poppins", sans-serif;
  padding-right: 1em;
  font-weight: bold;
  text-transform: capitalize;
`;

export const StatValue = styled.span`
  font-size: 20px;
`;

export const StatLabel = styled.span`
  font-size: 20px;

  padding-right: 5px;
`;
