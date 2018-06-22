exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', table => {
    table.increments()
    table.integer('age')
<<<<<<< HEAD
    table.integer('gender_id').unsigned()
=======
    table.integer('gender_id')
>>>>>>> 5bfcdbcfea94b037832b66bc372c8423665db481
    table.foreign('gender_id').references('genders.id').onDelete('CASCADE')
    table.integer('race_id')
    table.foreign('race_id').references('races.id').onDelete('CASCADE')
    table.string('lat', 100)
    table.string('long', 100)
    table.integer('type_id')
    table.foreign('type_id').references('types.id').onDelete('CASCADE')
    table.string('other', 100)
    table.string('viewpoint', 100)
    table.string('noun').notNullable()
    table.string('action').notNullable()
    table.string('reason').notNullable()
    table.string('story', 1000)
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('problems')
};
