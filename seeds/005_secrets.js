exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secret: 'I hate rugs', team_member_id: 1},
        {id: 2, secret: 'I have never seen Wizard Of Oz', team_member_id: 2},
        {id: 3, secret: 'I like cows more than llamas', team_member_id: 3}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('secrets_id_seq', (SELECT MAX(id) FROM secrets));`)
      })
}
