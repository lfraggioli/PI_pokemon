const axios = require("axios");
const { Pokemon, Type } = require("../db");
const baseURL = "https://pokeapi.co/api/v2/";
const urlID = "https://pokeapi.co/api/v2/pokemon";
const validarNombre = (name) => {
  if (typeof name === "string") {
    return name.toLowerCase();
  }
  return name;
};

const renombrar = (name) => {
  if (Array.isArray(name)) {
    const newNameArray = name.map((type) => {
      return type.charAt(0).toUpperCase() + type.slice(1);
    });
    return newNameArray;
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
};
const handlerGetPokemonByName = async (url, name) => {
  try {
    const { data } = await axios.get(`${url}/${name}`);
    const i = data;
    return {
      id: i.id,
      name: renombrar(i.name),
      types: i.types.map((e) => renombrar(e.type.name)),
      image: i.sprites.front_default,
      hp: i.stats[0].base_stat,
      attack: i.stats[1].base_stat,
      defense: i.stats[2].base_stat,
      speed: i.stats[5].base_stat,
      height: i.height,
      weight: i.weight,
    };
  } catch (error) {
    console.log(error);
  }
};
const getPokemonByName = async (req, res) => {
  try {
    const { name } = validarNombre(req.query);
    console.log(name);
    const pokemon = await handlerGetPokemonByName(urlID, name);

    if (!pokemon) {
      const pokemonDB = await handlerGetPokemonByNameDB(name);

      if (!pokemonDB) {
        res.status(404).json({
          message: "No se a encontrado un Pokemon con ese Nombre o ID",
        });
      }

      return res.json(pokemonDB);
    }

    return res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getPokemonByName };
