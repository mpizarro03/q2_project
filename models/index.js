const knex = require('../knex.js')

function create(body) {
  const age = body.age
  const gender = body.gender
  const race = body.race
  const topic = body.topic
  const newTopic = body.newTopic
  const viewpoint = body.viewpoint
  const noun = body.noun
  const action = body.action
  const reason = body.reason
  const story = body.story
  const lat = body.lat
  const long = body.long
  const problem = {
    age: age,
    gender_id: 1,
    race_id: 1,
    lat: lat,
    long: long,
    type_id: 1,
    other: newTopic,
    viewpoint: viewpoint,
    noun: noun,
    action: action,
    reason: reason,
    story: story
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
    query.gender_id = gender
  }

  if(body.raceData){
    query.race_id = race
  }

  if(body.topicData){
    query.type_id = type
  }

  const ageQuery = {}

  if(body.ageMin){
    ageQuery.age_min = ageMin
  }

  if(body.ageMax){
    ageQuery.age_max = ageMax
  }

  if(!body.ageMin){
    ageQuery.age_min = 0
  }

  if(!body.ageMax){
    ageQuery.age_max = 150
  }

  return knex('problems')
    .where(query)
    .whereBetween('age', [ageQuery.age_min, ageQuery.age_max])
}

module.exports = { getAll, create, login, query }
