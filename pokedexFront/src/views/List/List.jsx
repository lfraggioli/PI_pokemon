import React from "react";
import PokemonList from "../../components/Cards/PokemonList";
import { Container } from "../../components/Home/styles";

const List = () => {
  return (
    <div>
      <Container>
        <PokemonList />{" "}
      </Container>
    </div>
  );
};

export default List;
