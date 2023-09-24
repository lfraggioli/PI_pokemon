import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonTypes,
  filterByType,
  getPokemons,
  getNextPage,
  getPreviousPage,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import SearchBar from "../Buttons&Filters/SearchBar";
import { GridContainer, GridItem, SearchContainer } from "./styledCard";
import axios from "axios";

function Cards() {
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.pokeList);

  const currentPage = useSelector((state) => state.currentPage);
  const tipos = useSelector((state) => state.types);
  //buscar👇🏻
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  //filtrar por TYPE👇🏻
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  // const [filteredPokemon, setFilteredPokemon] = useState([]);
  useEffect(() => {
    dispatch(getPokemons(currentPage));
  }, [dispatch, currentPage]);

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
    console.log(newType);
    dispatch(filterByType(newType));
  };

  const loadPreviousPage = () => {
    dispatch(getPreviousPage());
  };

  const loadNextPage = () => {
    dispatch(getNextPage());
  };

  const lastCard = currentPage * 12;
  const firstCard = lastCard - 12;
  const currentPokemon = pokeList.slice(firstCard, lastCard); //Empieza en la carta 0 y termina en la 12 cuando pag = 12

  return (
    <>
      <SearchContainer>
        <SearchBar
          searchedPokemon={searchedPokemon}
          searchValue={searchValue}
          setSearchedPokemon={setSearchedPokemon}
          setSearchValue={setSearchValue}
        />

        {searchedPokemon && searchValue !== "" && (
          <GridItem key={searchedPokemon.id}>
            <Link to={`/detail/${searchedPokemon.id}`}>
              <h2>{searchedPokemon.name}</h2>
            </Link>
            <img src={searchedPokemon.sprites.front_default} alt="pokemon" />
          </GridItem>
        )}
      </SearchContainer>
      {/* Mostrar la lista completa si no se está buscando */}
      <div>
        <label>Filtrar por tipo:</label>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">Todos</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {searchValue === "" && (
        <>
          <GridContainer>
            <PokemonList pokeList={pokeList} />
          </GridContainer>
          <Pagination
            onPreviousPage={loadPreviousPage}
            onNextPage={loadNextPage}
          />
        </>
      )}
    </>
  );
}

export default Cards;
