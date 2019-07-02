const express = require('express');
const Pokemon = require('./pokemon.controller');
const router = express.Router();

router.get('/', Pokemon.getPokemon);

module.exports = router;