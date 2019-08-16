const db = require('../data/db-config.js');

function getRecipes() {
  // returns recipes db
  return db('recipes');
}

function getShoppingList(recipe_id) {
  // returns linked db
  return db('recipes-ingredients-units as riu')
    // adds ingredient details
    .join('ingredients as i', 'riu.ingredient_id', '=', 'i.id')
    // filters out only req recipe
    .where({recipe_id})
    // filters out only req cols
    .select('i.name as Ingredient Name', 'riu.quantity as Amount');
}

function getInstructions(recipe_id) {
  // return linked db
  return db('steps as s')
    // add recipe details
    .join('recipes as r', 'r.id', '=', 's.recipe_id')
    // filter out only req recipe steps
    .where('r.id', '=', recipe_id)
    // filter out only req cols
    .select('s.description as Step')
    // order records by entry order
    .orderBy('s.id');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}