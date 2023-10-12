import styled from "styled-components";
export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  margin-top: 1em;
  padding: 2rem;
  margin-bottom: 1em;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`;

const typeColors = {
  Normal: "#A8A77A",
  normal: "#A8A77A",
  Fighting: "#C22E28",
  fighting: "#C22E28",
  Flying: "#A98FF3",
  flying: "#A98FF3",
  Poison: "#A33EA1",
  poison: "#A33EA1",
  Ground: "#E2BF65",
  ground: "#E2BF65",
  Rock: "#B6A136",
  rock: "#B6A136",
  Bug: "#A6B91A",
  bug: "#A6B91A",
  Ghost: "#735797",
  ghost: "#735797",
  Steel: "#B7B7CE",
  steel: "#B7B7CE",
  Fire: "#EE8130",
  fire: "#EE8130",
  Water: "#6390F0",
  water: "#6390F0",
  Grass: "#7AC74C",
  grass: "#7AC74C",
  Electric: "#D9E82B",
  electric: "#D9E82B",
  Psychic: "#F95587",
  psychic: "#F95587",
  Ice: "#96D9D6",
  ice: "#96D9D6",
  Dragon: "#6F35FC",
  dragon: "#6F35FC",
  Dark: "#705746",
  dark: "#705746",
  Fairy: "#D685AD",
  fairy: "#D685AD",
  Unknown: "#68A090",
  unknown: "#68A090",
  Shadow: "#5E637F",
  shadow: "#5E637F",
};
export const TypeOption = styled.option`
  padding: 5px 15px;
  margin: 0 2px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  color: #000;
  background-color: ${({ type }) => typeColors[type]};
  border-radius: 5px;
`;

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
  background: linear-gradient(
    90deg,
    rgba(235, 244, 245, 0.6) 0%,
    rgba(181, 198, 224, 0.6) 100%
  );
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding-bottom: 1em;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 0;
  min-height: 100vh;
  height: auto;
  position: relative;
`;

export const Name = styled.h1`
  padding-top: 0.5rem;
  margin-top: 0;
  font-size: 1.7em;
  font-weight: 900;
  color: #e8f1ff;
  -webkit-text-stroke: 0.05px #000;
  text-align: center;
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
  margin-top: 15px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  top: 0;
  line-height: 0.5em;
  color: #393939;
  font-family: "Roboto", monospace;
  font-size: 2em;
  -webkit-text-stroke: 0.5px #393939;
  text-shadow: 0.5px 0.5px 0.5px #e8f1ff;
  font-weight: 900;
  text-transform: uppercase;
`;

export const StatValue = styled.span`
  font-size: 20px;
`;

export const StatLabel = styled.span`
  font-size: 20px;

  padding-right: 5px;
`;
