const axios = require("axios");
const { handlerGetPokemonAPI } = require("../handlers/pokemonGetters");
const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
const getAll = async (req, res) => {
  try {
    const { data } = await axios(url);
    const allPokemon = data.results;
    const pokeArrayOfPromises = handlerGetPokemonAPI(allPokemon);
    const listAll = await Promise.all(pokeArrayOfPromises);
    return res.status(200).json(listAll);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getAll };
