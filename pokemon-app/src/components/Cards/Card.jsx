import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, getNextPage, getPreviousPage } from "../../redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const baseURL = "https://pokeapi.co/api/v2/";
  const pokeList = useSelector((state) => state.pokeList);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage); // Agrega currentPage

  const [searchValue, setSearchValue] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    dispatch(getList(currentPage));
  }, [dispatch, currentPage]);

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
  const loadPreviousPage = () => {
    dispatch(getPreviousPage());
  };
  const loadNextPage = () => {
    dispatch(getNextPage());
  };

  return (
    <>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={clearSearch}>Borrar búsqueda</button>

      {/* Botón para cargar la siguiente página */}
      {/* Mostrar el Pokémon buscado si se encuentra */}
      {searchedPokemon && searchValue !== "" && (
        <div key={searchedPokemon.id}>
          <Link to={`/detail/${searchedPokemon.id}`}>
            <h2>{searchedPokemon.name}</h2>
          </Link>
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
      <button onClick={loadPreviousPage}>ANTERIOR</button>
      <button onClick={loadNextPage}>SIGUIENTE</button>
    </>
  );
}

export default Card;
