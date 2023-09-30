import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokemonList from "../../../Cards/PokemonList";
import PokemonDB from "../../../Cards/PokemonDB";
import { getDBPokemons, getPokemons } from "../../../../redux/actions";
import { ButtonContainer } from "../../styledButtons";

export const OriginFilter = () => {
  const dispatch = useDispatch();

  const [origin, setOrigin] = useState("api");
  useEffect(() => {
    if (origin === "api") {
      dispatch(getPokemons());
    } else if (origin === "db") {
      dispatch(getDBPokemons());
    }
  }, [dispatch, origin]);
  const handleApiClick = () => {
    setOrigin("api");
  };

  const handleDbClick = () => {
    setOrigin("db");
  };

  return (
    
    <ButtonContainer>
      <button onClick={handleApiClick} value="api">
        API
      </button>
      <button onClick={handleDbClick} value="db">
        DB
      </button>
      {origin === "api" ? <PokemonList /> : <PokemonDB />}
    </ButtonContainer>
  );
};
