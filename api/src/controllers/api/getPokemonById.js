const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const urlId = "https://pokeapi.co/api/v2/pokemon/";
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
const handlerGetPokemonById = async (url, id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    const i = data;
    return {
      id: i.id,
      name: renombrar(i.name),
      types: i.types.map((e) => renombrar(e.type.name)),
      image: i.sprites.other.home.front_default,
      hp: i.stats[0].base_stat,
      attack: i.stats[1].base_stat,
      defense: i.stats[2].base_stat,
      speed: i.stats[5].base_stat,
    };
  } catch (error) {
    console.log(error);
  }
};
const handlerGetPokemonByIdDB = async (id) => {
  try {
    console.log(id);
    const pokemonDB = await Pokemon.findOne({
      where: { name: id },
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
const getPokemonById = async (req, res) => {
  try {
    const id = validarNombre(req.params.id);
    const pokemon = await handlerGetPokemonById(urlId, id);

    if (!pokemon) {
      res.status(404).json({
        message: "No se a encontrado un Pokemon con ese Nombre o ID",
      });
    }

    return res.json(pokemon);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPokemonById };
