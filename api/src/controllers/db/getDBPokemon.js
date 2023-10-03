const { Pokemon } = require("../../db");
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

module.exports = getDBPokemons;
