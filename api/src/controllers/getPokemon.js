const axios = require("axios");

const baseURL = "https://pokeapi.co/api/v2/";

const getPokemons = async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}pokemon?limit=10&offset=0`);
    const data = response.data;
    const pokeArrayOfPromises = data.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      const data = response.data;

      return data;
    });

    const listaPokemon = await Promise.all(pokeArrayOfPromises);
    // console.log(listaPokemon)
    res.status(200).json(listaPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
