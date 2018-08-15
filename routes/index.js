const express = require('express')
// const data = []
const router = express.Router()
const ctrl = require('../controllers/index.js')

//all routes
router.post('/', ctrl.create)
router.post('/login', ctrl.login)
router.get('/team', ctrl.getAll)
router.post('/team', ctrl.query)

//routes for users and auth
// router.use('/auth', auth);
// router.use('/users', users);

//Stretch goals:
//route for getting team members user info(admin page)
// app.get('/users', function(req, res, next){
//   res.sendStatus(200)
// })

module.exports = router
