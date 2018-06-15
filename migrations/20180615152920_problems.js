
exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', table => {
    table.increments()
    table.string('type', 50).notNullable()
    table.string('viewpoint', 50).notNullable()
    table.string('noun', 70).notNullable()
    table.string('action').notNullable()
    table.string('reason').notNullable()
    table.string('story', 1000).notNullable()
    table.string('gender', 50).notNullable()
    table.string('race', 50).notNullable()
    table.integer('age').notNullable()
    table.string('lat', 50).notNullable()
    table.string('long', 50).notNullable()
    table.timestamp(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('problems')
};
