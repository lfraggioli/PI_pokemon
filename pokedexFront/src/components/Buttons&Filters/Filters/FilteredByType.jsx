import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackUpPokemons, setPagination } from "../../../redux/actions";
import { Link } from "react-router-dom";
import {
  Box,
  BoxItem,
  ContentWrapper,
  Icon,
  PokeID,
  PokeName,
  Rectangle1,
  Rectangle2,
  Stats,
  TopText,
  TypeDiv,
  TypeText,
  TypesContainer,
} from "../../Cards/styles/styledCards";
import PokemonCard from "../../Cards/Card";
import {
  ButtonContainer,
  NextButton,
  PageContainer,
  ParentContainer,
  PreviousButton,
} from "../styledButtons";

const FilteredByType = () => {
  const dispatch = useDispatch();
  const filteredPokemon = useSelector((state) => state.filteredPokemon);

  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visiblePokemon = filteredPokemon.slice(startIndex, endIndex);

  const handleLoadMore = () => {
    // Incrementa la página actual
    dispatch(setPagination(currentPage + 1, itemsPerPage));
  };

  const handleLoadLess = () => {
    // Decrementa la página actual, asegurándote de que no sea menor que 1
    dispatch(setPagination(Math.max(currentPage - 1, 1), itemsPerPage));
  };

  return (
    <div>
      {" "}
      <ContentWrapper>
        <Box>
          {visiblePokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Box>{" "}
        <ParentContainer>
          <PageContainer>
            <ButtonContainer>
              <PreviousButton onClick={handleLoadLess}>Anterior</PreviousButton>
              <NextButton onClick={handleLoadMore}>Siguiente</NextButton>
            </ButtonContainer>{" "}
          </PageContainer>
        </ParentContainer>
      </ContentWrapper>
    </div>
  );
};

export default FilteredByType;
