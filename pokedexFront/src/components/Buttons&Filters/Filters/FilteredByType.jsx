import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackUpPokemons, setPagination } from "../../../redux/actions";
import { Link } from "react-router-dom";
import {
  Box,
  BoxItem,
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
      <Box>
        {visiblePokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>

      <button onClick={handleLoadLess}>Anterior</button>
      <button onClick={handleLoadMore}>Siguiente</button>
    </div>
  );
};

export default FilteredByType;
