exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() => {
      // Inserts seed entries
      return knex('problems').insert([
        {id: 1, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 1, type_id: 2, race_id: 2},
        {id: 2, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 23, gender_id: 2, type_id: 1, race_id: 1},
        {id: 3, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 3, type_id: 3, race_id:3},
        {id: 4, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 1, type_id: 4, race_id: 3},
        {id: 5, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 15, gender_id: 4, type_id: 5, race_id: 5},
        {id: 6, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 5, type_id: 6, race_id:6},
        {id: 7, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 1, type_id: 7, race_id: 1},
        {id: 8, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 25, gender_id: 6, type_id: 8, race_id: 2},
        {id: 9, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 7, type_id: 8, race_id:3},
        {id: 10, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 1, type_id: 1, race_id: 4},
        {id: 11, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 45, gender_id: 2, type_id: 2, race_id: 5},
        {id: 12, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 3, type_id: 3, race_id:6},
        {id: 13, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 4, type_id: 4, race_id: 2},
        {id: 14, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 55, gender_id: 5, type_id: 5, race_id: 1},
        {id: 15, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 6, type_id: 6, race_id:3},
        {id: 16, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 7, type_id: 7, race_id: 4},
        {id: 17, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 70, gender_id: 1, type_id: 8, race_id: 5},
        {id: 18, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 3, type_id: 2, race_id:6},
        {id: 19, noun: "Whole Foods", action: "start using recyclable materials", reason: "we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 32, gender_id: 5, type_id: 5, race_id: 2},
        {id: 20, noun: "Target", action: "using plastic bags", reason: "so we wouldn't waste so much plastic", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 6, type_id: 8, race_id: 1},
        {id: 21, noun: "Boulder", action: "start using open space as refugee camps", reason: "so people in need have a safe place to stay", story: "This is my story", lat: "00.00.00", long: "01.01.01", age: 29, gender_id: 7, type_id: 3, race_id:3},

      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));`)
      })
}
