import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  ImageContainer,
  Name,
  TypeContainer,
  Image,
  TypeBadge,
  StatsContainer,
  Stat,
  StatValue,
  StatLabel,
} from "./styles/styledCards";

export default function PokemonCard({ pokemon }) {
  return (
    <CardContainer>
      <Link to={`/detail/${pokemon.id}`}>
        <Name>{pokemon.name}</Name>
        {/* <PokeID>#{pokemon.id}</PokeID> */}
        <ImageContainer>
          <Image src={pokemon.image} alt={pokemon.name} />
        </ImageContainer>{" "}
        <TypeContainer>
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type}>
              {type}
            </TypeBadge>
          ))}
        </TypeContainer>
        <StatsContainer>
          <Stat>
            <StatLabel>HP: </StatLabel>
            <StatValue> {pokemon.hp}</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Attack: </StatLabel>
            <StatValue> {pokemon.attack}</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Defense: </StatLabel>
            <StatValue> {pokemon.defense}</StatValue>
          </Stat>
        </StatsContainer>
      </Link>
    </CardContainer>
  );
}
