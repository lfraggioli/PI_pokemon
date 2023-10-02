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
  background: linear-gradient(
    90deg,
    rgba(235, 244, 245, 0.7) 0%,
    rgba(181, 198, 224, 0.8) 100%
  );
  left: 50%;
  top: 4em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.5em;
  transform: translate(-50%);
  border-radius: 15px;
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
  left: 50%; /* Centra el icono en el eje X */
  top: 50%;
  transform: translate(-50%, -50%); /* Centra el icono en el eje Y */
`;

export const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
  display: flex;
  font-size: 3em;
  left: 10%;
  top: 5%;
  color: #f6bd20;
  text-shadow: 1px 1px 2px black;
  -webkit-text-stroke: 1px #000;
  position: absolute;
`;
export const ID = styled.div`
  position: absolute;
  text-align: left;
  left: 10%;
  bottom: 5%;
  font-size: 30px;
  color: transparent;
  width: 100%;
  -webkit-text-stroke: 1.1px #393939;
`;

export const StatsTitle = styled.div`
  position: relative;
  font-size: 1.6em;

  text-align: left;

  line-height: 0;
  width: 100%;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #fffeff;
  -webkit-text-stroke: 1px #000;
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

  color: var(--color-black);
  left: 10%;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0.5em;

  line-height: 1em;
  font-size: 1.7em;
  text-align: left;
  text-transform: capitalize;
  font-family: "Roboto", monospace;
  font-weight: 800;
  color: #393939;
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
  top: 60%;
  left: 5%;
  align-items: left;
  justify-content: left;
`;

export const TypesTitle = styled.div`
  position: absolute;
  font-size: 1.6em;
  bottom: 32%;
  left: 10%;
  text-align: left;
  width: 100%;
  text-transform: uppercase;
  color: #fffeff;
  -webkit-text-stroke: 1px #000;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
