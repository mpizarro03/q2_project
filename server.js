//require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

// Use body parser https://www.npmjs.com/package/body-parser
// See Express/Connect top-level generic for code to use here
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//route for creating a log-in for Team Members, return the body of the request that was sent to your route
app.post('/login', function(req, res, next){
  res.status(200).send(req.body)
})

//route for posting to database, return the body of the request that was sent to your route
app.post('/', function(req, res, next){
  res.status(200).send(req.body)
})

//route for posting to the Query page, return the body of the request that was sent to your route
app.post('/', function(req, res, next){
  res.status(200).send(req.body)
})

// write a catch all route that will respond with status of ?
app.use(function(req,res,next){
  res.sendStatus()
})
//route for listening on the port
app.listen(port, function(){
  console.log("listening on port", port);
})

//Stretch goals:
//route for getting team members user info(admin page), respond with a 200 status code
app.get('/', function(req, res, next){
  res.sendStatus(200)
})

// your server should be named app since that is what is being exported here
module.exports = app;
