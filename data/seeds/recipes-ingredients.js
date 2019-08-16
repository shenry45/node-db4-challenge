
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients-units').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-ingredients-units').insert([
        {
          ingredient_id: 1,
          recipe_id: 1,
          quantity: 20,
          unit: 2
        },
        {
          ingredient_id: 1,
          recipe_id: 2,
          quantity: 20,
          unit: 2
        },
        {
          ingredient_id: 2,
          recipe_id: 3,
          quantity: 20,
          unit: 2
        },
        {
          ingredient_id: 3,
          recipe_id: 4,
          quantity: 20,
          unit: 2
        },
      ]);
    });
};
