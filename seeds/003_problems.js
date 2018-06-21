exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() => {
      // Inserts seed entries
      return knex('problems').insert([
        {id: 1, age:32, gender_id:2, race_id:1, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 2, age:32, gender_id:3, race_id:5, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'stop', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 3, age:32, gender_id:1, race_id:1, lat:'1.000143', long:'43.99999465', type_id:1, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 4, age:32, gender_id:4, race_id:1, lat:'1.000143', long:'43.99999465', type_id:4, other:null, viewpoint:'stop', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 5, age:32, gender_id:5, race_id:1, lat:'1.000143', long:'43.99999465', type_id:2, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 6, age:32, gender_id:2, race_id:4, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'stop', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 7, age:32, gender_id:2, race_id:2, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));`)
      })
}
