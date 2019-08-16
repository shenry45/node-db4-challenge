
exports.up = function(knex) {
  return (knex.schema.createTable('recipes', (tbl) => {
    tbl.increments('id')
      .primary();
    tbl.string('name')
      .notNullable();
    tbl.integer('time_min')
      .unsigned();
    tbl.integer('difficulty')
      .unsigned();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments('id')
        .primary();
      tbl.string('name')
        .notNullable();
      tbl.string('unit', 10)
        .notNullable();
      tbl.float('quantity')
        .notNullable();
    })
    .createTable('recipes-ingredients', (tbl) => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id');
    })
    .createTable('steps', (tbl) => {
      tbl.increments('id')
        .primary();
      tbl.string('description')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .references('recipes.id');
    })
  )
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes-ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  )
};
