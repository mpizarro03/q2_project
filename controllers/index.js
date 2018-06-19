const model = require('../models/index.js')

function getAll(req, res, next){
  model.getAll()
  .then(results => {
    res.status(200).send(results);
  }).catch((err) => console.error(`Not sending All data ${err}`))
}

function create(req, res, next){
  model.create(req.body)
  .then(res.status(201))
  .catch((err) => console.error(`HELLO ${err}`))
}

function login(req, res, next){
  model.login(req.body)
  res.status(200)
}

function query(req, res, next){
  model.query(req.body)
  .then(results =>{
    console.log(results)
    res.status(200).send(results);
  }).catch((err) => console.error(`Query unsuccessful ${err}`))
}

module.exports = { getAll, create, login, query }
