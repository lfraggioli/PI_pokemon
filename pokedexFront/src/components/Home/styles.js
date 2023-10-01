import styled from "styled-components";
import background from "../../assets/body_bg.png";
export const Container = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative; /* Agrega esta propiedad para posicionar los elementos hijos */
  z-index: 1;
  column-gap: 0.5em;
`;
export const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overflow-y: auto;
  min-height: 100vh;
  z-index: 0;
`;

export const ResultsContainer = styled.div`
  position: absolute; /* Agrega esta propiedad para posicionar el ResultsContainer */
  top: 5%; /* Establece la posición vertical */

  transform: translateY(10%); /* Centra verticalmente */
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
