exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {id: 1, race: 'Black'},
        {id: 2, race: 'White'},
        {id: 3, race: 'Hispanic'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('races_id_seq', (SELECT MAX(id) FROM races));`)
      })
}
