let pokemonError = {};
const pokemonPromise = require('./pokemon.model');

function getPokemon(req, res) {
  pokemonPromise.then(response => {
    return res.status(200).send(response);
  })
}
module.exports = {
  getPokemon
}