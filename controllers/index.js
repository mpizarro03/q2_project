const model = require('../models/index.js')

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
  .then(res.status(200))
}

module.exports = { create, login, query }
