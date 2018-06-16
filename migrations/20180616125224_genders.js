exports.up = function(knex, Promise) {
  return knex.schema.createTable('genders', table => {
    table.increments()
    table.string('gender', 40).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genders')
};
