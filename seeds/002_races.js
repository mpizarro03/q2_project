exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {id: 1, race: 'native american or alaskan native'},
        {id: 2, race: 'asian'},
        {id: 3, race: 'black or african american'},
        {id: 4, race: 'hispanic or latino'},
        {id: 5, race: 'native hawaiian or other pacific islander'},
        {id: 6, race: 'white'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('races_id_seq', (SELECT MAX(id) FROM races));`)
      })
}
