//require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//how the server serves up your static (client side files)
app.use(express.static('public'));

//how server.js talks to mvc aka routes/index.js
const xgRoutes = require('./routes/index.js')
app.use('/', xgRoutes)


// catch all error route
app.use(function(req,res,next){
  res.status(404).json({ error: {message: "404 Not Found"}})
})

//route for listening on the port
app.listen(port, function(){
  console.log("listening on port", port);
})

module.exports = app;
