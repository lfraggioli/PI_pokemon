const { Router } = require("express");
const router = Router();
const getTypes = require("../controllers/getTypes");
const routerPokemon = require("./pokemonRouter");

router.use("/pokemons", routerPokemon);
router.get("/types", getTypes);

module.exports = router;
