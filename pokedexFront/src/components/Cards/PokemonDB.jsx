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
import { Box, ContentWrapper } from "./styles/styledCards";
import PokemonCard from "./Card";
import {
  PageContainer,
  ParentContainer,
} from "../Buttons&Filters/styledButtons";

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
          <Link to={`/detail/${pokemon.id}`}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))}
      </Box>{" "}
    </ContentWrapper>
  );
}

export default PokemonDB;
