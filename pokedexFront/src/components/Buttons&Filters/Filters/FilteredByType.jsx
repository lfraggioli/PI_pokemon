import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../../redux/actions";

import { Box, ContentWrapper } from "../../Cards/styles/styledCards";
import PokemonCard from "../../Cards/Card";
import {
  ButtonContainer,
  NextButton,
  Option,
  PageButton,
  PageContainer,
  ParentContainer,
  PreviousButton,
  Select,
} from "../styledButtons";
import { Link } from "react-router-dom";

const FilteredByType = ({ filteredPokemon }) => {
  const dispatch = useDispatch();

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

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <ContentWrapper>
        <Box>
          {visiblePokemon.map((pokemon) => (
            <Link to={`/detail/${pokemon.id}`}>
              {" "}
              <PokemonCard key={pokemon.id} pokemon={pokemon} />{" "}
            </Link>
          ))}
        </Box>
        <ParentContainer>
          <PageContainer>
            <ButtonContainer>
              {currentPage !== 1 && (
                <PreviousButton onClick={handleLoadLess}>
                  Anterior
                </PreviousButton>
              )}
              <Select
                value={currentPage}
                onChange={(event) =>
                  dispatch(
                    setPagination(Number(event.target.value), itemsPerPage)
                  )
                }
              >
                {pageNumbers.map((pageNumber) => (
                  <Option key={pageNumber} value={pageNumber}>
                    {pageNumber}
                  </Option>
                ))}
              </Select>
              {currentPage !== totalPages && (
                <NextButton onClick={handleLoadMore}>Siguiente</NextButton>
              )}
            </ButtonContainer>
          </PageContainer>
        </ParentContainer>
      </ContentWrapper>
    </div>
  );
};

export default FilteredByType;
