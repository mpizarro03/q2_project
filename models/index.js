const knex = require('../knex.js')

function create(body) {
  const noun = body.noun
  const action = body.action
  const reason = body.reason
  const story = body.story
  const lat = body.lat
  const long = body.long
  const age = body.age
  const gender = body.gender
  const topic = body.topic
  const race = body.race
  const problem = {
    noun: noun,
    action: action,
    reason: reason,
    story: story,
    lat: lat,
    long: long,
    age: age,
    gender_id: 1,
    type_id: 1,
    race_id: 1
  }
  return knex('problems')
    .insert(problem)
}

function getAll() {
  return knex('problems')
}


function login(){
  const email = body.email
  const password = body.password
  const user = {
    "email": email,
    "password": password
  }

}

function query(){
  const type_id = body.type_id
  const age = body.age
  const gender_id = body.gender_id
  const race_id = body.race_id
  const search = {
    "type_id": type_id,
    "age": age,
    "gender_id": gender_id,
    "race_id": race_id
  }
  knex('problems')
  .where(search)
}

module.exports = {getAll,create,login,query}
