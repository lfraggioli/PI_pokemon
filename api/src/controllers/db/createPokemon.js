const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const { handlerCreatePokemon } = require("../../handlers/pokemonSetters");

const validarDatosPostPokemon = (pokemon) => {
  const { name, image, hp, attack, defense, speed, weight, height } = pokemon;

  if (
    !name ||
    !image ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !weight ||
    !height
  )
    return "Por favor, complete todos los datos requeridos";

  console.log(name);

  if (typeof name !== "string" || name.length > 11)
    return "El nombre del Pokemon no es correcto";

  if (typeof image !== "string") return "Inserte una url valida";

  if (hp < 1 || hp > 500) return "Error, ingrese numero entre 1 y 500";

  if (attack < 10 || attack > 1000)
    return "Error, ingrese numero entre 10 y 1000";

  if (defense < 10 || defense > 1000)
    return "Error, ingrese numero entre 10 y 1000";

  if (speed < 10 || speed > 100) return "Error, ingrese numero entre 10 y 100";

  if (weight < 10 || weight > 4000)
    return "Error, ingrese numero entre 10 y 4000";

  if (height < 10 || height > 4000)
    return "Error, ingrese numero entre 10 y 4000";

  return pokemon;
};
const createPokemon = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, types } = req.body;
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
    });

    //*Instancio el modelo Type para agregar los tipos de pokemon
    const instancia = await Type.bulkCreate(
      types.map((typeName) => ({ name: typeName })),
      { ignoreDuplicates: true }
    );

    //*Relación en la tabla
    await newPokemon.addTypes(instancia);
    res.status(200).json(newPokemon);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Handle Sequelize validation errors
      res
        .status(400)
        .json({ error: "Error de validación", details: error.errors });
    } else {
      // Handle other errors
      res
        .status(500)
        .json({ error: "Error interno del servidor", details: error.message });
    }
  }
};

module.exports = createPokemon;
