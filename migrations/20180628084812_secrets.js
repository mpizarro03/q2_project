exports.up = function(knex, Promise) {
  return knex.schema.createTable('secrets', table => {
    table.increments();
    table.string('secret');
    table.integer('team_member_id')
    table.foreign('team_member_id').references('team_members.id').onDelete('CASCADE')

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('secrets');
};
