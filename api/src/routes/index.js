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
const addPokemon = require("../controllers/addPokemon");
const { getPokemonByName } = require("../controllers/searchByName");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/pokemons/next", getNext);
router.get("/pokemons/previous", getPrevious);
router.get("/pokemons/name", getPokemonByName);
router.get("/pokemons/db", getDBPokemons);
router.get("/types", getTypes);
router.post("/pokemons", addPokemon);
router.get("/pokemons/:id", getPokemonById);

module.exports = router;
