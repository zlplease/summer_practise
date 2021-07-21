const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()


router.post('/users/login', userCtrl.login)

router.post('/users', userCtrl.register)

router.get('/user', userCtrl.getCurrentUser)

router.put('/user', userCtrl.updateCurrentUser)

module.exports = router