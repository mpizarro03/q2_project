const express = require('express')
const data = []
const router = express.Router()
const ctrl = require('../controllers/index.js')

//all routes
router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.post('/login', ctrl.login)
router.post('/db', ctrl.query)


module.exports = router
