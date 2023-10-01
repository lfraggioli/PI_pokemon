const axios = require("axios");
const {
  handlerGetPokemonAPI,
  handlerGetPokemonDB,
} = require("../handlers/pokemonGetters");
const { Type, Pokemon } = require("../db");

const url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";
let page = url;
const getPokemons = async (req, res) => {
  let page = "https://pokeapi.co/api/v2/";
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
const getDBPokemons = async (req, res) => {
  try {
    // Buscar todos los Pokémon con sus tipos asociados
    const pokemons = await Pokemon.findAll({
      include: {
        model: Type,
        through: "poke_types", // Nombre de la tabla intermedia
        attributes: ["name"], // Puedes seleccionar las columnas que desees mostrar
      },
    });

    // Mapear los resultados en el formato deseado
    const formattedPokemons = pokemons.map((pokemon) => {
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
    return res.status(201).json(formattedPokemons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
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
  getDBPokemons,
};
