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
  position: fixed;
  top: 10%;
  left: 50%; /* Centra el elemento en el eje X */
  transform: translateX(-50%); /* Ajusta la posición horizontal */
  margin-bottom: 0;
  z-index: 2;
`;
export const ParentContainer = styled.div`
  position: relative;
  height: auto;
`;

export const PageContainer = styled.div`
  display: flex;
  left: 50%;

  bottom: 0;
  transform: translate(-50%);
  position: absolute;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  width: 150px;
  transition: width 0.3s ease; /* Transición para el cambio de ancho */
  margin-bottom: 10px;
  font-size: large;
  font-family: "Roboto", sans-serif;
  &:focus {
    width: 250px; /* Ancho expandido al hacer clic en el input */
  }
  animation: ${slideIn} 0.6s ease-in-out; /* Aplicamos la animación */
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
  padding: 10px;
  position: relative;
  border-radius: 0px 10px 10px 0px;
  margin-bottom: 10px;
  background-color: #d53141;
  border: none;
  color: white;
  font-size: large;
  cursor: pointer;
  width: 100px;
  transition: 0.2s ease-in-out;
  font-family: "Roboto", sans-serif;
  &:hover {
    background-color: #c52018;
  }
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

export const Select = styled.select`
  appearance: none;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  padding: 8px 12px;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077ff;
  }
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #f5f5f5;
  background-color: #000;
`;

export const Option = styled.option`
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }

  &:checked {
    background-color: #e0e0e0;
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-left: 1rem;
  float: right;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: darkred;
  }
`;
