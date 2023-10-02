import React from "react";
import { Box, ContentWrapper } from "../Cards/styles/styledCards";
import PokemonCard from "../Cards/Card";
import { ResultCard } from "../Home/styles";

export default function SearchResults({ searchResults }) {
  return (
    <>
      {" "}
      {searchResults.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
}
