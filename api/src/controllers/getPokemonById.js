const axios = require("axios");
const { Pokemon, Type } = require("../db");
const baseURL = "https://pokeapi.co/api/v2/";
const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;

    const dbPokemon = await Pokemon.findByPk(id);
    if (dbPokemon) {
      const dbTypes = await dbPokemon.getTypes();

      //* objeto con los datos del Pokémon desde DB y sus tipos
      const pokeDB = {
        name: dbPokemon.name,
        hp: dbPokemon.hp,
        attack: dbPokemon.attack,
        defense: dbPokemon.defense,
        types: dbTypes.map((t) => t.name),
      };
      res.status(200).json(pokeDB);
    } else {
      const { data } = await axios.get(`${baseURL}pokemon/${id}`);
      const { name, sprites, stats, types } = data;
      const { front_default } = sprites;
      const statData = stats.map((statObject) => ({
        name: statObject.stat.name,
        base_stat: statObject.base_stat,
      }));
      const typeNames = types.map((typeObj) => typeObj.type.name);
      const pokeData = {
        name,
        sprites: { front_default },
        stats: statData,
        types: typeNames,
      };
      res.status(200).json(pokeData);
    }
    // const data = await getId.json(); //!TEMPORAL => luego cambiar línea y destructurar props
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getPokemonById;
