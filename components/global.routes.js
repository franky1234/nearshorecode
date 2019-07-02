const pokemonRoute = require('./pokemon/pokemon.route');

module.exports = app => {
  app.use('/pokemons/:id', pokemonRoute);
}