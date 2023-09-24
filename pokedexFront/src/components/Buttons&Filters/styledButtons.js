import React, { useState } from "react";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 0.5s ease-in-out; /* Aplicamos la animación */
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
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px 0 0 5px; /* Bordes redondeados solo en el lado izquierdo */
  cursor: pointer;
  margin-right: 0; /* Eliminamos el margen derecho */
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
