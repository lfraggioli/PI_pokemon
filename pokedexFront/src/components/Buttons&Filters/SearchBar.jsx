import axios from "axios";
import React from "react";
import {
  SearchBarContainer,
  SearchButton,
  SearchInput,
  ButtonContainer,
  ClearButton,
} from "./styledButtons";
export default function SearchBar({
  searchedPokemon,
  setSearchedPokemon,
  searchValue,
  setSearchValue,
}) {
  const baseURL = "https://pokeapi.co/api/v2/";

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios(
        `${baseURL}pokemon/${searchValue.toLowerCase()}`
      );
      const data = response.data;
      setSearchedPokemon(data);
    } catch (error) {
      console.error("No se encontró el Pokémon:", searchValue);
      setSearchedPokemon(null);
    }
  };
  const clearSearch = () => {
    setSearchValue("");
    setSearchedPokemon(null);
  };
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <ButtonContainer>
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        <ClearButton onClick={clearSearch}>Borrar búsqueda</ClearButton>
      </ButtonContainer>
    </SearchBarContainer>
  );
}
