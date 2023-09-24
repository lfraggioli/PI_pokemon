import React, { useContext } from "react";
import { GridItem } from "./styledCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function PokemonList({ pokeList }) {
  return (
    <>
      <>
        {pokeList.map((pokemon) => (
          <GridItem key={pokemon.id}>
            <Link to={`/detail/${pokemon.id}`}>
              <h2>{pokemon.name}</h2>
            </Link>
            <img src={pokemon.image} alt="pokemon" />
          </GridItem>
        ))}
      </>
    </>
  );
}

export default PokemonList;
