const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const {
  handlerGetPokemonByName,
  handlerGetPokemonByNameDB,
} = require("../../handlers/pokemonGetters");
const baseURL = "https://pokeapi.co/api/v2/";
const urlID = "https://pokeapi.co/api/v2/pokemon";
const validarNombre = (name) => {
  if (typeof name === "string") {
    return name.toLowerCase();
  }
  return name;
};
const handlerGetPokemonByIdDB = async (id) => {
  try {
    console.log(id);
    const pokemonDB = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: ["name"],
      },
    });
    return {
      id: pokemonDB.id,
      name: pokemonDB.name,
      image: pokemonDB.image,
      types: pokemonDB.Types.map((e) => renombrar(e.name)),
      hp: pokemonDB.hp,
      attack: pokemonDB.attack,
      defense: pokemonDB.defense,
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
      const pokemonDB = await handlerGetPokemonByIdDB(name);

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
