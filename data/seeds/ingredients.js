
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Rice'},
        {name: 'Black Beans'},
        {name: 'Flour'},
        {name: 'Brown Sugar'},
        {name: 'Cinnamon'},
        {name: 'Artichoke'},
      ]);
    });
};
