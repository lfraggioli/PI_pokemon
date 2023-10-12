import React from "react";
import { Background, Container, Title, TitleImage } from "./styles";

import logo from "../../assets/LOGO.png";
import TypeFilter from "../Buttons&Filters/Filters/TypeFilter";
export const Homepage = () => {
  return (
    <>
      <Title>Busca, ordena y filtra Pokemones a tu gusto</Title>
      <TitleImage src={logo} />
      <Background />
      <Container>
        <TypeFilter />
      </Container>
    </>
  );
};
