exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_members', table => {
    table.increments()
    table.string('email', 100).notNullable()
    table.string('fname', 60).notNullable()
    table.string('lname', 60).notNullable()
    table.string('password').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team_members')
};
