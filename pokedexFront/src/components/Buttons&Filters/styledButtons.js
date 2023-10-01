import styled, { keyframes } from "styled-components";

// Animación para mostrar y ocultar la barra de búsqueda
export const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const SearchBarContainer = styled.div`
  position: absolute;
  top: 20%;
  margin-top: 2em;
  margin-bottom: 1em;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export const ParentContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const PageContainer = styled.div`
  display: flex;
  left: 50%;

  padding-bottom: 1em;
  transform: translate(-50%);
  position: absolute;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  transition: width 0.3s ease; /* Transición para el cambio de ancho */
  margin-bottom: 10px;

  &:focus {
    width: 400px; /* Ancho expandido al hacer clic en el input */
  }
  animation: ${slideIn} 0.5s ease-in-out; /* Aplicamos la animación */
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

export const PreviousButton = styled.button`
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

export const NextButton = styled.button`
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

export const SearchButton = styled.button`
  padding: 10px 20px;
  top: 1em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4500;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0; /* Bordes redondeados solo en el lado derecho */
  cursor: pointer;
  margin-left: 0; /* Eliminamos el margen izquierdo */
`;
