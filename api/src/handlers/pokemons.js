const axios = require("axios");
const { Pokemon, Type } = require("../db");

const handlerGetPokemonAPI = (pokemones) => {
  const pokemon = pokemones.map(async (p) => {
    const { data } = await axios(p.url);
    const prop = data;
    return {
      id: prop.id,
      name: prop.name,
      types: prop.types.map((t) => t.type.name),
      image: prop.sprites.front_default,
      hp: prop.stats[0].base_stat,
      attack: prop.stats[1].base_stat,
      defense: prop.stats[2].base_stat,
    };
  });
  return pokemon;
};

const handlerGetPokemonById = async (url, id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    const i = data;
    return {
      id: i.id,
      name: renombrar(i.name),
      types: i.types.map((e) => renombrar(e.type.name)),
      image: i.sprites.other.dream_world.front_default,
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
const handlerGetPokemonByNameDB = async (id) => {
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
      speed: pokemonDB.speed,
      height: pokemonDB.height,
      weight: pokemonDB.weight,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  handlerGetPokemonAPI,
  handlerGetPokemonById,
  handlerGetPokemonByNameDB,
};
