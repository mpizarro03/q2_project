exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {id: 1, type: 'environment/nature'},
        {id: 2, type: 'community/neighborhood'},
        {id: 3, type: 'politics/human rights/greater good'},
        {id: 4, type: 'company/organization'},
        {id: 5, type: 'products/services'},
        {id: 6, type: 'family/personal'},
        {id: 7, type: 'education/school'},
        {id: 8, type: 'other'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('types_id_seq', (SELECT MAX(id) FROM types));`)
      })
}
