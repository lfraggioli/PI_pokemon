const axios = require("axios");
const { Pokemon } = require("../db");

const baseURL = "https://pokeapi.co/api/v2/";
const searchPokemonByName = async (req, res) => {
  try {
    const { name } = req.query; //!Corregir la búsqueda con mayúsculas
    const dbSearch = await Pokemon.find({
      name: { $regex: new RegExp(name, "i") }, //? 'i' hace que la búsqueda sea insensible a mayúsculas/minúsculas
    });
    const apiSearch = await axios.get(`${baseURL}pokemon/${name}`);
    const apiPokemon = apiSearch.data;
    if (dbSearch.length === 0 && !apiPokemon.name) {
      res.status(404).json({ message: "Pokemon no encontrado.\n", error });
    }

    const response = {
      db: dbSearch,
      api: apiPokemon,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = searchPokemonByName;
