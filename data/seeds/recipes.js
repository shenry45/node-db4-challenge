
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Cookie Brownies'},
        {name: 'Raspberry Cheesecake'},
        {name: 'Maple Syrup'},
        {name: 'Cannoli By The Dozen'}
      ]);
    });
};
