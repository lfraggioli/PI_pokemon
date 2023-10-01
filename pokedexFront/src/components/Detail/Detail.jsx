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
import { fetchPokemon } from "../../redux/actions";
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
    fetchPokemon(id).then((pokeData) => {
      setPokeDetail(pokeData);
    });
  }, [id]);

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/detail/${nextId}`);
    fetchPokemon(nextId).then((pokeData) => {
      setPokeDetail(pokeData);
    });
  };

  const handlePrevious = () => {
    const previousId = parseInt(id) - 1;
    navigate(`/detail/${previousId}`);
    fetchPokemon(previousId).then((pokeData) => {
      setPokeDetail(pokeData);
    });
  };

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
              {pokeDetail.speed && <p>Speed: {pokeDetail.speed}</p>}
              {pokeDetail.weight && <p>weight: {pokeDetail.weight}</p>}
              {pokeDetail.height && <p>height: {pokeDetail.height}</p>}
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
          {pokeDetail.sprites && (
            <Icon
              srcSet={pokeDetail.sprites.front_default}
              alt="pokemon sprite"
            />
          )}
        </Div2>
      </Container>
      <PageContainer>
        <ButtonContainer>
          <PreviousButton onClick={handlePrevious}>Anterior</PreviousButton>
          <NextButton onClick={handleNext}>Siguiente</NextButton>
        </ButtonContainer>
      </PageContainer>
    </Container2>
  );
};

export default Detail;
