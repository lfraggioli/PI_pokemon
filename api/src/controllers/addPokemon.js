const axios = require("axios");
const { Pokemon, Type } = require("../db");

const addPokemon = async (req, res) => {
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
    res.status(500).json({ message: error });
  }
};

module.exports = addPokemon;
