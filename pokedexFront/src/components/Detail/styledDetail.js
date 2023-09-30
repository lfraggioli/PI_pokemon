import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import background from "../../assets/Detail-bg.png";
export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-dela-gothic-one: 'Dela Gothic One';
--font-roboto: Roboto;

/* font sizes */
--font-size-xl: 20px;
--font-size-21xl: 40px;

/* Colors */
--color-black: #000;
--color-white: #fff;
--color-yellow: #d9e82b;

/* Border radiuses */
--br-11xs: 2px;

}
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 700px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50%;
  top: 5em;
  transform: translate(-50%);
  border-radius: 10px;
`;

export const Container2 = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Div1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1;
  width: 50%;
`;

export const Div2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: right;
  flex: 1;
  width: 50%;
`;

export const Icon = styled.img`
  position: absolute;
  width: 350px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
  display: flex;
  font-size: 3em;
  left: 10%;
  top: 5%;
  color: white;
  -webkit-text-stroke: 1.2px #000;
  position: absolute;
`;
export const ID = styled.div`
  position: absolute;
  text-align: left;
  left: 10%;
  bottom: 5%;
  font-size: 25px;
  color: rgba(134, 126, 126, 0);

  width: 100%;
  -webkit-text-stroke: 1.5px black;
`;

export const StatsTitle = styled.div`
  position: relative;
  font-size: 1.5em;

  text-align: left;
  bottom: 0;
  line-height: 0;
  width: 100%;
  text-transform: uppercase;
  font-family: var(--font-dela-gothic-one);
  color: var(--color-black);
`;

export const StatsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  top: 20%;
  margin-top: 1em;
  text-transform: uppercase;
  font-family: var(--font-dela-gothic-one);
  color: var(--color-black);
  left: 10%;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1em;

  line-height: 1em;
  font-size: 1.7em;
  text-align: left;
  text-transform: capitalize;
  font-family: "Roboto", monospace;
  font-weight: 800;
  color: white;
  -webkit-text-stroke: 1px #000;
`;

export const typeColors = {
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

export const TypeDiv = styled.div`
  border-radius: 3px;
  background-color: ${(props) => typeColors[props.type] || "#fff"};
  display: block;
  max-width: 100%;
  width: 8em;
  text-align: center;
  padding: 0.5em;
  height: 2.5em;
  align-content: center;
  font-weight: 600;
  font-size: 0.6em;
  margin: 1em 1em 1em 0em;
  text-transform: uppercase;
  color: #000;
`;

export const TypesContainer = styled.div`
  position: relative;
  display: grid;

  max-width: 100%;
  padding: 1em;
  top: 63%;
  left: 5%;
  align-items: left;
  justify-content: left;
`;

export const TypesTitle = styled.div`
  position: absolute;
  font-size: 1.1em;
  bottom: 30%;
  left: 10%;
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  color: white;
  font-family: var(--font-dela-gothic-one);
`;
