const createPokemon = require("../controllers/db/createPokemon");
const { getAll } = require("../controllers/api/getBackUpPokemons");
const {
  getPokemons,
  getNext,
  getPrevious,
} = require("../controllers/api/getPokemon");
const { getPokemonById } = require("../controllers/api/getPokemonById");
const { getPokemonByName } = require("../controllers/api/searchByName");
const getDBPokemons = require("../controllers/db/getDBPokemon");
const routerPokemon = require("express").Router();

routerPokemon.get("/", getPokemons);
routerPokemon.get("/all", getAll);
routerPokemon.get("/next", getNext);
routerPokemon.get("/previous", getPrevious);
routerPokemon.get("/name", getPokemonByName);
routerPokemon.get("/db", getDBPokemons);
routerPokemon.post("/db", createPokemon);
routerPokemon.get("/:id", getPokemonById);

module.exports = routerPokemon;
