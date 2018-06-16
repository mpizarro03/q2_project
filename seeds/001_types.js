exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {id: 1, type: 'Environment'},
        {id: 2, type: 'Human Rights'},
        {id: 3, type: 'Family'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('types_id_seq', (SELECT MAX(id) FROM types));`)
      })
}
