exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() => {
      // Inserts seed entries
      return knex('problems').insert([
        {id: 1, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 1, type_id: 2, race_id: 2},
        {id: 2, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 23, gender_id: 2, type_id: 2, race_id: 1},
        {id: 3, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 3, type_id: 2, race_id:3},
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));`)
      })
}
