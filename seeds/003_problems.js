exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() => {
      // Inserts seed entries
      return knex('problems').insert([
        {id: 1, age:32, gender_id:4, race_id:3, lat:'1.000143', long:'43.99999465', type_id:1, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 2, age:18, gender_id:2, race_id:5, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'stop', noun:'public spaces', action:'forcing people to use binary gender bathrooms', reason:'it alienates people and puts them in danger', story:'I get stared at and sometimes harassed when I go into bathrooms. Cis people dont understand what its like to feel out of place in bathroom.'},
        {id: 3, age:56, gender_id:5, race_id:3, lat:'1.000143', long:'43.99999465', type_id:4, other:null, viewpoint:'stop', noun:'the tech industry', action:'not working harder to achieve diversity', reason:'our projects could be so much more impactful', story:null},
        {id: 4, age:22, gender_id:4, race_id:1, lat:'1.000143', long:'43.99999465', type_id:4, other:null, viewpoint:'happen', noun:'hospitals', action:'serve better food', reason:'people who are trying to heal didnt have to each such crappy food.', story:'when my little brother recovering from pneumonia, the hospital food was so terrible. It hardly seems productive to feed sick people processed, overcooked food.'},
        {id: 5, age:32, gender_id:5, race_id:2, lat:'1.000143', long:'43.99999465', type_id:2, other:null, viewpoint:'happen', noun:'the cannabis industry', action:'continue funding education forever', reason:'we could undo some of the damage TABOR did and be a competitive state', story:null},
        {id: 6, age:32, gender_id:2, race_id:4, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'stop', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'},
        {id: 7, age:32, gender_id:2, race_id:2, lat:'1.000143', long:'43.99999465', type_id:3, other:null, viewpoint:'happen', noun:'all restaurants and offices', action:'be required to use compostable or recyclable packaging', reason:'we would put less plastic and styrofoam into the landfills', story:'we would put less plastic and styrofoam into the landfills'}
      ]);
    }).then(() => {
      return knex.raw(`SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));`)
      })
}
