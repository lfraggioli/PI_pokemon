import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokemonList from "../../../Cards/PokemonList";
import PokemonDB from "../../../Cards/PokemonDB";
import { getDBPokemons, getPokemons } from "../../../../redux/actions";
import {
  ButtonContainer,
  OriginButton,
  OriginContainer,
  OriginResults,
  ParentContainer,
} from "./styles";

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
    <>
      <ParentContainer>
        <OriginContainer>
          <ButtonContainer>
            <OriginButton onClick={handleApiClick} value="api">
              Lista oficial
            </OriginButton>
            <OriginButton onClick={handleDbClick} value="db">
              Mis Pokemon
            </OriginButton>
          </ButtonContainer>{" "}
        </OriginContainer>
      </ParentContainer>
      <OriginResults>
        {" "}
        {origin === "api" ? <PokemonList /> : <PokemonDB />}
      </OriginResults>
    </>
  );
};
