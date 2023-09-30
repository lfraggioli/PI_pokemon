import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBackUpPokemons,
  getPokemons,
  getSorted,
  sortPokeList,
} from "../../../../redux/actions";
import { Button, Buttons } from "./styledOrder";
import PokemonList from "../../../Cards/PokemonList";
import OrderedCards from "./OrderedCards";

const Order = () => {
  const pokeList = useSelector((state) => state.allPokemon);
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  useEffect(() => {
    dispatch(getBackUpPokemons());
    dispatch(sortPokeList(order));
  }, [dispatch]);
  const handleSortChange = (event) => {
    const order = event.target.value;
    dispatch(sortPokeList(order));
  };

  return (
    <div>
      <Buttons>
        <label>Ordenar por nombre: </label>
        <Button value="asc" onClick={handleSortChange}>
          Ascendente
        </Button>
        <Button value="desc" onClick={handleSortChange}>
          Descendente
        </Button>
      </Buttons>
      <OrderedCards pokeList={pokeList} />
    </div>
  );
};

export default Order;
