const db = require('../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes-ingredients-units as riu')
    .join('ingredients as i', 'riu.ingredient_id', 'i.id')
    .where({recipe_id});
}

module.exports = {
  getRecipes,
  getShoppingList,
  // getInstructions
}