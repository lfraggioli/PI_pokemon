const axios = require("axios");
const { Type } = require("../db");
const URL_TYPES = "https://pokeapi.co/api/v2/type";
const getTypes = async (req, res) => {
  try {
    const dbTypes = await Type.findAll();
    if (dbTypes.length === 0) {
      const apiData = await axios.get(`${URL_TYPES}`);
      const typesFromAPI = apiData.data.results;

      for (const type of typesFromAPI) {
        await Type.create({ name: type.name });
      }
      const addedDBTypes = await Type.findAll();
      const typesNameProps = addedDBTypes.map((t) => t.name);

      res.status(200).json(typesNameProps);
    } else {
      res.status(200).json(dbTypes);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTypes;
