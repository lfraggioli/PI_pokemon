import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseURL = "https://pokeapi.co/api/v2/";

const Detail = () => {
  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState({});
  useEffect(() => {
    axios(`${baseURL}pokemon/${id}`).then((response) => {
      const data = response.data;
      const { name, sprites } = data;
      const { front_default } = sprites;
      const pokeData = {
        name,
        sprites: { front_default },
      };

      setPokeDetail(pokeData);
    });
  }, [id]);

  return (
    <>
      {pokeDetail.name && <h1>{pokeDetail.name}</h1>}
      {pokeDetail.sprites && (
        <img srcSet={pokeDetail.sprites.front_default} alt="pokemon sprite" />
      )}
    </>
  );
};

export default Detail;
