import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNextPage, getPokemons, getPreviousPage } from "../../redux/actions";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { Box, ContentWrapper } from "./styles/styledCards";
import PokemonCard from "./Card";
import { Background } from "../Home/styles";
import {
  PageContainer,
  ParentContainer,
} from "../Buttons&Filters/styledButtons";

function PokemonList() {
  const pokeList = useSelector((state) => state.pokeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  const loadPreviousPage = () => {
    dispatch(getPreviousPage());
  };

  const loadNextPage = () => {
    dispatch(getNextPage());
  };

  return (
    <>
      <ContentWrapper>
        <Box>
          {pokeList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Box>
        <ParentContainer>
          <PageContainer>
            <Pagination
              onPreviousPage={loadPreviousPage}
              onNextPage={loadNextPage}
            />{" "}
          </PageContainer>
        </ParentContainer>
      </ContentWrapper>
    </>
  );
}

export default PokemonList;
