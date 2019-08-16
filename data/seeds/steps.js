
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          description: "Steps",
          recipe_id: 1
        },
        {
          description: "Steps",
          recipe_id: 1
        },
        {
          description: "Steps",
          recipe_id: 2
        },
        {
          description: "Steps",
          recipe_id: 3
        },
        {
          description: "Steps",
          recipe_id: 4
        },
      ]);
    });
};
