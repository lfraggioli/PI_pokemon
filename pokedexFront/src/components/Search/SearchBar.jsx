import React, { useState } from "react";
import {
  SearchBarContainer,
  SearchButton,
  SearchInput,
} from "../Buttons&Filters/styledButtons";

export default function SearchBar(props) {
  const [pokeSearch, setPokeSearch] = useState([]);
  const handleInputChange = (event) => {
    setPokeSearch(event.target.value);
  };

  return (
    <>
      <SearchInput type="text" onChange={handleInputChange} />
      <SearchButton onClick={() => props.onSearch(pokeSearch)}>
        Buscar
      </SearchButton>
    </>
  );
}
