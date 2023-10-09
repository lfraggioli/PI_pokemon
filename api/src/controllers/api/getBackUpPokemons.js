const axios = require("axios");
const { handlerGetPokemonAPI } = require("../../handlers/pokemonGetters");
const { Pokemon, Type } = require("../../db");
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const getAll = async (req, res) => {
  try {
    const { data } = await axios(url);
    const allPokemon = data.results;
    const pokeArrayOfPromises = handlerGetPokemonAPI(allPokemon);
    const listAll = await Promise.all(pokeArrayOfPromises);

    // Buscar todos los Pokémon con sus tipos asociados
    const getDBPokemons = await Pokemon.findAll({
      include: {
        model: Type,
        through: "poke_types", // Nombre de la tabla intermedia
        attributes: ["name"], // Puedes seleccionar las columnas que desees mostrar
      },
    });

    // Mapear los resultados en el formato deseado
    const formattedPokemons = getDBPokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        types: pokemon.Types.map((type) => type.name),
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        // Agrega otros campos según sea necesario
      };
    });

    const allPokemons = [...listAll, ...formattedPokemons];
    return res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getAll };
