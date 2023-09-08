const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const getPokemons = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const searchPokemonByName = require("../controllers/searchPokemonByName");
const getTypes = require("../controllers/getTypes");
const addPokemon = require("../controllers/addPokemon");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/pokemons/:id", getPokemonById);
router.get("/pokemons/name", searchPokemonByName);
router.get("/types", getTypes);
router.post("/pokemons", addPokemon);

module.exports = router;
