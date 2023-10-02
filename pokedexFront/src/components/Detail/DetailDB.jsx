import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Icon,
  Stats,
  TypesTitle,
  TypeDiv,
  TypesContainer,
  StatsTitle,
  Container,
  Name,
  ID,
  StatsContainer,
  Div1,
  Div2,
  Container2,
} from "./styledDetail";
import { fetchDBPokemon } from "../../redux/actions";
import {
  ButtonContainer,
  NextButton,
  PageContainer,
  PreviousButton,
} from "../Buttons&Filters/styledButtons";

const Detail = () => {
  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState({ types: [] });
  const navigate = useNavigate();

  useEffect(() => {
    fetchDBPokemon(id).then((pokeData) => {
      setPokeDetail(pokeData);
    });
  }, [id]);

  return (
    <Container2>
      <Container>
        <Div1>
          {pokeDetail.name && <Name>{pokeDetail.name}</Name>}{" "}
          <div>{pokeDetail.id && <ID>Pokemon #{pokeDetail.id}</ID>}</div>
          <StatsContainer>
            <StatsTitle>STATS</StatsTitle>
            <Stats>
              {pokeDetail.hp && <p>HP: {pokeDetail.hp}</p>}
              {pokeDetail.attack && <p>Attack: {pokeDetail.attack}</p>}
              {pokeDetail.defense && <p>Defense: {pokeDetail.defense}</p>}
              {/* {pokeDetail.speed && <p>Speed: {pokeDetail.speed}</p>}
              {pokeDetail.weight && <p>weight: {pokeDetail.weight}</p>}
              {pokeDetail.height && <p>height: {pokeDetail.height}</p>} */}
            </Stats>
          </StatsContainer>
          <TypesTitle>Types</TypesTitle>
          <TypesContainer>
            {pokeDetail.types && (
              <div>
                {pokeDetail.types.map((type, index) => (
                  <TypeDiv key={index} type={type}>
                    {type}
                  </TypeDiv>
                ))}
              </div>
            )}
          </TypesContainer>
        </Div1>
        <Div2>
          {pokeDetail.image && (
            <Icon srcSet={pokeDetail.image} alt="pokemon sprite" />
          )}
        </Div2>
      </Container>
    </Container2>
  );
};

export default Detail;
