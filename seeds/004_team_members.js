exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('team_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_members').insert([
        {id: 1, email: 'mp@awesome', fname: "Melissa", lname: "Pizarro", password: "****34"},
        {id: 2, email: 'az@awesome', fname: "Aimee", lname: "Zawacki", password: "****33"},
        {id: 3, email: 'cs@awesome', fname: "Chuck", lname: "Schultz", password: "****43"},
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('team_members_id_seq', (SELECT MAX(id) FROM team_members));`)
      })
}
