const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const {
  getPokemons,
  getNext,
  getPrevious,
  getDBPokemons,
} = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const getTypes = require("../controllers/getTypes");
const { getPokemonByName } = require("../controllers/searchByName");
const { getAll } = require("../controllers/getBackUpPokemons");
const createPokemon = require("../controllers/createPokemon");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/pokemons/all", getAll);
router.get("/pokemons/next", getNext);
router.get("/pokemons/previous", getPrevious);
router.get("/pokemons/name", getPokemonByName);
router.get("/pokemons/db", getDBPokemons);
router.get("/types", getTypes);
router.post("/pokemons/db", createPokemon);
router.get("/pokemons/:id", getPokemonById);

module.exports = router;
