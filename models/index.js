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

function query(body){
  const gender = body.genderData
  const race = body.raceData
  const type = body.topicData
  const ageMin = body.ageMin
  const ageMax = body.ageMax
  const query = {}

  if(body.genderData){
    query[gender_id] = body.genderData
  }

  if(body.raceData){
    query[race_id] = body.raceData
  }

  if(body.topicData){
    query[type_id] = body.topicData
  }

  if(body.ageMin){
    query[age_min] = body.ageMin
  }

  if(!body.ageMin){
    query[age_min] = 0
  }

  if(body.ageMax){
    query[age_max] = body.ageMax
  }

  if(!body.ageMax){
    query[age_max] = 150
  }

  return knex('problems')
    .where('gender_id', gender_id)
    .where('race_id', race_id)
    .where('type_id', type_id)
    .whereBetween('age', [age_min, age_max])

}

module.exports = { getAll, create, login, query }
