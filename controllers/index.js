const model = require('../models/index.js')

function getAll(req, res, next){
  const data = model.getAll()
  res.status(200).json({data})
}

function create(req, res, next){

  console.log("req.body:", req.body)
  const problem = model.create(req.body)
  console.log(problem)
  res.status(201)
}

function login(req, res, next){
  const teamUser = model.login(req.body)
  res.status(200)
}
function query(req, res, next){
  const search = model.query(req.body)
  .then(res.status(200))
}

module.exports = {getAll, create, login,query}
