import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackUpPokemons, sortPokeList } from "../../../../redux/actions";
import {
  Button,
  ButtonContainer,
  Buttons,
  OrderContainer,
  ParentContainer,
  Container,
  Label,
} from "./styledOrder";
import OrderedCards from "./OrderedCards";
import { Background } from "../../../Home/styles";

const OrderPage = () => {
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
    <>
      {" "}
      <ParentContainer>
        <OrderContainer>
          <Label>Ordenar por nombre: </Label>
          <ButtonContainer>
            <Button value="asc" onClick={handleSortChange}>
              Ascendente
            </Button>
            <Button value="desc" onClick={handleSortChange}>
              Descendente
            </Button>
          </ButtonContainer>
        </OrderContainer>
      </ParentContainer>
      <Container>
        <OrderedCards pokeList={pokeList} />
      </Container>{" "}
    </>
  );
};

export default OrderPage;
