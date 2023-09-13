import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const baseURL = "https://pokeapi.co/api/v2/";
  const pokeList = useSelector((state) => state.pokeList);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

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
    <>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={clearSearch}>Borrar búsqueda</button>

      {/* Mostrar el Pokémon buscado si se encuentra */}
      {searchedPokemon && searchValue !== "" && (
        <div key={searchedPokemon.id}>
          <h2>{searchedPokemon.name}</h2>
          <img src={searchedPokemon.sprites.front_default} alt="pokemon" />
        </div>
      )}
      {/* mostrar la lista completa si no se está buscando */}
      {searchValue === "" && (
        <div>
          {pokeList.map((pokemon) => (
            <div key={pokemon.id}>
              <Link to={`/detail/${pokemon.id}`}>
                <h2>{pokemon.name}</h2>
              </Link>
              <img src={pokemon.sprites.front_default} alt="pokemon" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;
