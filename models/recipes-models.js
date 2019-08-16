const db = require('../data/db-config.js');

function getRecipes() {
  // returns recipes db
  return db('recipes');
}

function getShoppingList(recipe_id) {
  // returns linked db
  return db('recipes-ingredients-units as riu')
    // adds ingredient details to temp table
    .join('ingredients as i', 'riu.ingredient_id', '=', 'i.id')
    // filters out only req recipe
    .where({recipe_id})
    // filters out only req cols
    .select('i.name as Ingredient Name', 'riu.quantity as Amount')
    .first();
}

module.exports = {
  getRecipes,
  getShoppingList,
  // getInstructions
}