exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('genders').del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        {id: 1, gender: 'Gender Non Conforming'},
        {id: 2, gender: 'Transgender Woman'},
        {id: 3, gender: 'Transgender Man'},
        {id: 4, gender: 'Female'},
        {id: 5, gender: 'Male'},
        {id: 6, gender: 'Other'},
        {id: 7, gender: 'Prefer not to say'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('genders_id_seq', (SELECT MAX(id) FROM genders));`)
      })
}
