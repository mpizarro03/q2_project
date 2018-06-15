//require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

// Use body parser https://www.npmjs.com/package/body-parser
// See Express/Connect top-level generic for code to use here
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//route for posting to database, return the body of the request that was sent to your route
app.post('/', function(req, res, next){
  res.status(200).send(req.body)
})

//route for posting to the Query page, return the body of the request that was sent to your route
app.post('/{}', function(req, res, next){
  res.status(200).send(req.body)
})

//route for creating a login for Team Members, return the body of the request that was sent to your route
app.post('/signup', function(req, res, next){
  res.status(200).send(req.body)
})
//route for getting team members user info, respond with a 200 status code
app.get('/', function(req, res, next){
  res.sendStatus(200)
})
//route for deleting team member, respond with the parameter id
app.delete('/cookies/:id', function(req,res,next){
  res.status(200).send(req.params.id)
})

// write a catch all route that will respond with status of ?
app.use(function(req,res,next){
  res.sendStatus()
})
//route for listening on the port
app.listen(port, function(){
  console.log("listening on port", port);
})


// your server should be named app since that is what is being exported here
module.exports = app;
