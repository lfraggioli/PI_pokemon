import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOrigin,
  filterType,
  getBackUpPokemons,
  getDBPokemons,
  sortPokeList,
} from "../../../redux/actions";
import FilteredByType from "./FilteredByType";
import {
  ButtonText,
  Container,
  DivButton,
  FilterButton,
} from "./styles/styledFilters";
import { Button } from "./Order/styledOrder";
import { OriginButton } from "./FilterOrigin/styles";
import PokemonDB from "../../Cards/PokemonDB";

function TypeFilter() {
  const dispatch = useDispatch();
  const filteredPokemon = useSelector((state) => state.filteredPokemon);
  //filtrar por TYPE👇🏻
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("todos");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    dispatch(getBackUpPokemons());

    dispatch(filterType(selectedType));
  }, [dispatch, selectedType]);

  //!CAMBIAR POR CONTROLLER DEL BACK👇🏻
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
  // const handleApiClick = (e) => {
  //   dispatch(filterOrigin(e.target.value));
  // };

  // const handleDbClick = (e) => {
  //   dispatch(filterOrigin(e.target.value));
  // };
  // const handleAllClick = (e) => {
  //   dispatch(filterOrigin(e.target.value));
  // };
  const handleFilterOrigin = (event) => {
    event.preventDefault();
    dispatch(filterOrigin(event.target.value));
  };
  return (
    <>
      <DivButton>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="todos">Todos</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </DivButton>
      <Button value="asc" onClick={handleSortChange}>
        Ascendente
      </Button>
      <Button value="desc" onClick={handleSortChange}>
        Descendente
      </Button>
      <DivButton>
        <select
          onChange={(event) => {
            handleFilterOrigin(event);
          }}
        >
          <option value="all">Todos</option>
          <option value="db">DB</option>
          <option value="api">API</option>
        </select>
      </DivButton>
      {/* <OriginButton onClick={handleApiClick} value="api">
        Lista oficial
      </OriginButton>
      <OriginButton onClick={handleDbClick} value="db">
        Mis Pokemon
      </OriginButton>
      <OriginButton onClick={handleAllClick} value="all">
        Todos
      </OriginButton> */}

      <Container>
        <FilteredByType filteredPokemon={filteredPokemon} />
      </Container>
    </>
  );
}

export default TypeFilter;
