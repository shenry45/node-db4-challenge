
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: 'Flour',
          unit: 'cups',
          quantity: '20'
        },
        {
          name: 'Mushrooms',
          unit: 'lbs',
          quantity: '1'
        },
        {
          name: 'Milk',
          unit: 'oz',
          quantity: '16'
        },
      ]);
    });
};
