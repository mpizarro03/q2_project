exports.up = function(knex, Promise) {
  return knex.schema.createTable('types', table => {
    table.increments()
    table.string('type', 40).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('types')
};
