import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getDBPokemons,
  getNextPage,
  getPokemons,
  getPreviousPage,
} from "../../redux/actions";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "./styles/styledCards";
import PokemonCard from "./Card";

function PokemonDB() {
  const myPokemons = useSelector((state) => state.myPokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDBPokemons());
  }, [dispatch]);
  const loadPreviousPage = () => {
    dispatch(getPreviousPage());
  };

  const loadNextPage = () => {
    dispatch(getNextPage());
  };

  return (
    <>
      <Box>
        {myPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>
      <Pagination onPreviousPage={loadPreviousPage} onNextPage={loadNextPage} />
    </>
  );
}

export default PokemonDB;
