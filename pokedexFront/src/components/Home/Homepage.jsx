import React, { useState } from "react";
import {
  Background,
  Container,
  ResultsContainer,
  Title,
  TitleImage,
} from "./styles";

import SearchBar from "../Search/SearchBar";
import SearchResults from "../Search/SearchResults";
import axios from "axios";
import { SearchBarContainer } from "../Buttons&Filters/styledButtons";

import logo from "../../assets/LOGO.png";
export const Homepage = () => {
  const [pokeSearch, setPokeSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Agrega un estado para manejar la carga

  const handleSearch = async (searchTerm) => {
    setIsLoading(true); // Establece isLoading en true al iniciar la búsqueda
    const endpoint = `http://localhost:3001/pokemons/${searchTerm}`;

    try {
      const { data } = await axios(endpoint);
      setPokeSearch((oldPokemon) => [...oldPokemon, data]);
    } catch (error) {
      console.log(error);
      return window.alert("Error", error);
    } finally {
      setIsLoading(false); // Establece isLoading en false al finalizar la búsqueda
    }
  };

  return (
    <>
      <Title>Ingresa un nombre de un Pokémon</Title>
      <TitleImage src={logo} />
      <Background />
      <SearchBarContainer>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />{" "}
        {/* Pasa isLoading como una prop al componente SearchBar */}
      </SearchBarContainer>
      <Container>
        <ResultsContainer>
          <SearchResults searchResults={pokeSearch} />
        </ResultsContainer>
      </Container>
    </>
  );
};
