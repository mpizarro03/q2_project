exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', table => {
    table.increments()
    table.string('viewpoint').notNullable()
    table.string('noun').notNullable()
    table.string('action').notNullable()
    table.string('reason').notNullable()
    table.string('story', 1000).notNullable()
    table.string('lat', 40).notNullable()
    table.string('long', 40).notNullable()
    table.integer('age').notNullable()
    table.integer('genders_id').unsigned();
    table.foreign('genders_id').references('genders.id').onDelete('CASCADE')
    table.integer('problems_id').unsigned();
    table.foreign('problems_id').references('problems.id').onDelete('CASCADE')
    table.integer('races_id').unsigned();
    table.foreign('races_id').references('races.id').onDelete('CASCADE')
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('problems')
};
