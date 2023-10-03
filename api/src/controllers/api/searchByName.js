const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const { handlerGetPokemonByName } = require("../../handlers/pokemonGetters");
const baseURL = "https://pokeapi.co/api/v2/";
const urlID = "https://pokeapi.co/api/v2/pokemon";
const validarNombre = (name) => {
  if (typeof name === "string") {
    return name.toLowerCase();
  }
  return name;
};

const getPokemonByName = async (req, res) => {
  try {
    const { name } = validarNombre(req.query);
    console.log(name);
    const pokemon = await handlerGetPokemonByName(urlID, name);

    if (!pokemon) {
      res.status(404).json({
        message: "No se a encontrado un Pokemon con ese Nombre o ID",
      });
    }

    return res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getPokemonByName };
