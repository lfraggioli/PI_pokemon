import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterType,
  getBackUpPokemons,
  getPokemons,
} from "../../../redux/actions";
import FilteredByType from "./FilteredByType";
import {
  ButtonText,
  Container,
  DivButton,
  FilterButton,
} from "./styles/styledFilters";
import PokemonList from "../../Cards/PokemonList";
import { Background } from "../../Home/styles";
function TypeFilter() {
  const dispatch = useDispatch();

  //filtrar por TYPE👇🏻
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("todos");
  useEffect(() => {
    if (selectedType !== "todos") {
      dispatch(filterType(selectedType));
    } else {
      dispatch(getBackUpPokemons());
    }
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

  const handleAllClick = () => {
    setSelectedType("todos");
  };

  return (
    <>
      <DivButton>
        <FilterButton
          onClick={handleAllClick}
          className={selectedType === "todos" ? "active" : ""}
          type="todos"
        >
          <ButtonText>Todos</ButtonText>
        </FilterButton>
        {types.map((type) => (
          <FilterButton
            key={type}
            onClick={() => handleTypeChange({ target: { value: type } })}
            className={selectedType === type ? "active" : ""}
            type={type}
          >
            <ButtonText> {type}</ButtonText>
          </FilterButton>
        ))}
      </DivButton>

      <Container>
        <div>
          {selectedType !== "todos" ? <FilteredByType /> : <PokemonList />}{" "}
        </div>
      </Container>
    </>
  );
}

export default TypeFilter;
