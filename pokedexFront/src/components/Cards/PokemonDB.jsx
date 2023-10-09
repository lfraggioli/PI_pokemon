import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDBPokemons } from "../../redux/actions";
import { Box, ContentWrapper } from "./styles/styledCards";
import PokemonCard from "./Card";

function PokemonDB() {
  const myPokemons = useSelector((state) => state.myPokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDBPokemons());
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Box>
        {myPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>{" "}
    </ContentWrapper>
  );
}

export default PokemonDB;
