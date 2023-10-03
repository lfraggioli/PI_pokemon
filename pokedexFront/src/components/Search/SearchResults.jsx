import React from "react";
import PokemonCard from "../Cards/Card";
import { Link } from "react-router-dom";

export default function SearchResults({ searchResults }) {
  return (
    <>
      {" "}
      {searchResults.map((pokemon) => (
        <Link to={`/detail/${pokemon.id}`}>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />{" "}
        </Link>
      ))}
    </>
  );
}
