exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('genders').del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        {id: 1, gender: 'Female'},
        {id: 2, gender: 'Male'},
        {id: 3, gender: 'Femme'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('genders_id_seq', (SELECT MAX(id) FROM genders));`)
      })
}
