exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', table => {
    table.increments()
    table.string('noun').notNullable()
    table.string('action').notNullable()
    table.string('reason').notNullable()
    table.string('story', 1000).notNullable()
    table.string('lat', 100)
    table.string('long', 100)
    table.integer('age').notNullable()
    table.integer('gender_id').unsigned()
    table.foreign('gender_id').references('genders.id').onDelete('CASCADE')
    table.integer('type_id').unsigned()
    table.foreign('type_id').references('types.id').onDelete('CASCADE')
    table.integer('race_id').unsigned()
    table.foreign('race_id').references('races.id').onDelete('CASCADE')
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('problems')
};
