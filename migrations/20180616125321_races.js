exports.up = function(knex, Promise) {
  return knex.schema.createTable('races', table => {
    table.increments()
    table.string('race', 40).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('races')
};
