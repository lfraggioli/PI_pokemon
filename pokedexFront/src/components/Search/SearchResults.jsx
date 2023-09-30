import React from "react";
import { Box } from "../Cards/styles/styledCards";
import PokemonCard from "../Cards/Card";

export default function SearchResults({ searchResults }) {
  return (
    <>
      <Box>
        {searchResults.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>
    </>
  );
}
