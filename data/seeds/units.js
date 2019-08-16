
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {name: 'lbs'},
        {name: 'oz'},
        {name: 'cups'},
        {name: 'g'}
      ]);
    });
};
