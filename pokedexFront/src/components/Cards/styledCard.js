import React from "react";
import styled from "styled-components";

// Definimos el componente principal que será un div con display: grid
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Tres columnas por fila
  gap: 16px; // Espacio entre elementos (puedes ajustarlo según tus necesidades)
`;
export const SearchContainer = styled.div`
  display: block;
  align-items: center;
  grid-template-columns: repeat(3, 1fr); // Tres columnas por fila
  gap: 16px; // Espacio entre elementos (puedes ajustarlo según tus necesidades)
`;

// Componente que representa cada elemento dentro del grid
export const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  text-align: center;
`;
