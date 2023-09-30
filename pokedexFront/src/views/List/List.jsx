import React from "react";
import PokemonList from "../../components/Cards/PokemonList";
import { Background } from "../../components/Home/styles";

const List = () => {
  return (
    <div>
      <Background>
        <PokemonList />{" "}
      </Background>
    </div>
  );
};

export default List;
