const axios = require("axios");
const { handlerGetPokemonAPI } = require("../../handlers/pokemonGetters");
const { Type, Pokemon } = require("../../db");

const url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";
let page = url;
const getPokemons = async (req, res) => {
  try {
    const { data } = await axios(url);
    const pokeList = await data.results;
    const pokeArrayOfPromises = handlerGetPokemonAPI(pokeList);
    const listaPokemon = await Promise.all(pokeArrayOfPromises);
    console.log(listaPokemon);
    return res.status(200).json(listaPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//*PAGINACION
const getNext = async (req, res) => {
  try {
    const { data } = await axios.get(page);
    if (data.next !== null) {
      page = data.next;
    } else {
      page = process.env.URL;
    }
    try {
      const { data } = await axios.get(page);
      const pokeNext = await data.results;
      const pokemon = handlerGetPokemonAPI(pokeNext);
      const getAll = await Promise.all(pokemon);

      return res.status(200).json(getAll);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPrevious = async (req, res) => {
  try {
    const { data } = await axios(page);
    if (data.previous !== null) {
      page = data.previous;
    } else {
      page = page;
    }
    try {
      const { data } = await axios(page);
      const pokePrevious = await data.results;
      const pokemon = handlerGetPokemonAPI(pokePrevious);
      const getAll = await Promise.all(pokemon);

      return res.status(200).json(getAll);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getPokemons,
  getNext,
  getPrevious,
};
