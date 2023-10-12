import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOrigin,
  filterType,
  getBackUpPokemons,
  sortPokeList,
} from "../../../redux/actions";
import FilteredByType from "./FilteredByType";
import {
  CloseButton,
  Container,
  DivButton,
  SearchOverlay,
} from "./styles/styledFilters";

import SearchBar from "../../Search/SearchBar";
import { Button } from "./Order/styledOrder";
import {
  DeleteButton,
  Option,
  SearchBarContainer,
  Select,
} from "../styledButtons";
import { TypeOption } from "../../Cards/styles/styledCards";
import { ResultsContainer } from "../../Home/styles";
import SearchResults from "../../Search/SearchResults";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonCard from "../../Cards/Card";
import styled, { keyframes } from "styled-components";
import Loader from "../Loader/Loader";

function TypeFilter() {
  const dispatch = useDispatch();
  const filteredPokemon = useSelector((state) => state.filteredPokemon);
  //filtrar por TYPE👇🏻
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("todos");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    if (selectedType === "todos") {
      dispatch(getBackUpPokemons());
    } else {
      dispatch(filterType(selectedType));
    }
  }, [dispatch, selectedType]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        const typeNames = data.results.map((type) => type.name);
        setTypes(typeNames);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
  };

  const handleSortChange = (event) => {
    const newOrder = event.target.value;
    setOrder(newOrder);
    dispatch(sortPokeList(newOrder));
  };

  const handleFilterOrigin = (event) => {
    event.preventDefault();
    dispatch(filterOrigin(event.target.value));
  };

  const [pokeSearch, setPokeSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Agrega un estado para manejar la carga
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);

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

  const handleCloseButton = () => {
    setSearchTerm("");
    setPokeSearch([]);
  };
  const handleDeleteResult = (id) => {
    setPokeSearch((prevResults) => prevResults.filter((p) => p.id !== id));
  };
  return (
    <>
      <DivButton>
        <Select
          onChange={(event) => {
            handleFilterOrigin(event);
          }}
        >
          <Option value="all">Todos los Pokemon</Option>
          <Option value="db">Mis Pokemon</Option>
          <Option value="api">Lista oficial</Option>
        </Select>

        <Select value={selectedType} onChange={handleTypeChange}>
          <Option value="todos">Selecciona un tipo</Option>
          {types.map((type) => (
            <TypeOption key={type} value={type}>
              {type}
            </TypeOption>
          ))}
        </Select>
        <Button value="asc" onClick={handleSortChange}>
          Ascendente
        </Button>
        <Button value="desc" onClick={handleSortChange}>
          Descendente
        </Button>
      </DivButton>
      <Button onClick={() => setSearchTerm("buscar")}>Buscar</Button>
      <Container>
        {searchTerm && (
          <SearchOverlay>
            <CloseButton onClick={handleCloseButton}>x</CloseButton>
            <SearchBarContainer>
              <SearchBar onSearch={handleSearch} />
            </SearchBarContainer>
            {isLoading ? (
              <Loader />
            ) : (
              <ResultsContainer>
                {pokeSearch.map((pokemon) => (
                  <div key={pokemon.id}>
                    <div>
                      <DeleteButton
                        onClick={() => handleDeleteResult(pokemon.id)}
                      >
                        X
                      </DeleteButton>
                    </div>
                    <Link to={`/detail/${pokemon.id}`}>
                      <PokemonCard pokemon={pokemon} />
                    </Link>
                  </div>
                ))}
              </ResultsContainer>
            )}
          </SearchOverlay>
        )}

        <FilteredByType filteredPokemon={filteredPokemon} />
      </Container>
    </>
  );
}

export default TypeFilter;
