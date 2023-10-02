import styled from "styled-components";
import background from "../../assets/hero_home.jpg";
import pattern from "../../assets/body_bg.png";
export const Container = styled.div`
  background-image: url(${pattern});
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  position: relative; /* Agrega esta propiedad para posicionar los elementos hijos */
  z-index: 0;
  column-gap: 0.5em;
`;

export const TitleImage = styled.img`
  padding-left: 0.5em;
  top: 10%;
  height: 120px;
  position: absolute;
  left: 50%; /* Centra el elemento en el eje X */
  transform: translateX(-50%); /* Ajusta la posición horizontal */
`;

export const Title = styled.h1`
  top: 28%;

  left: 50%; /* Centra el elemento en el eje X */
  transform: translateX(-50%); /* Ajusta la posición horizontal */
  text-shadow: 1px 2px 2px black;
  position: absolute;
  background: transparent;
  text-align: center;
  font-size: 1.8em;
  color: white;
  z-index: 1;
`;

export const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  object-fit: fill;
  height: 350px;
  bottom: 0;
  background-repeat: repeat;
  display: block;
  background-position: center;
  z-index: 0;
`;

export const ResultsContainer = styled.div`
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
