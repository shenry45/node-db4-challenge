
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('recipes', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('name')
          .notNullable();
        tbl.integer('time_min')
          .unsigned();
        tbl.integer('difficulty')
          .unsigned();
        }
      )
      .createTable('ingredients', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('name')
          .unique()
          .notNullable();
      })
      .createTable('units', (tbl) => {
        tbl.increments('id')
          .primary();
        tbl.string('name')
          .unique()
          .notNullable();
      })
      .createTable('recipes-ingredients-units', (tbl) => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipes.id');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredients.id');
        tbl.integer('quantity')
          .unsigned()
          .notNullable();
        tbl.string('unit')
          .notNullable()
          .references('units.id');
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
  return (
    knex.schema
      .dropTableIfExists('recipes-ingredients-units')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('units')
  )
};
