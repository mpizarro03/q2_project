const express = require('express')
// const data = []
const router = express.Router()
const ctrl = require('../controllers/index.js')

//all routes
router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.post('/login', ctrl.login)
router.post('/db', ctrl.query)

//Stretch goals:
//route for getting team members user info(admin page)
// app.get('/users', function(req, res, next){
//   res.sendStatus(200)
// })

module.exports = router
