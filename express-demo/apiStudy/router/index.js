const express = require('express')

const router = express.Router()

router.use(require('./user'))

router.use(require('./tag'))

router.use('/profiles', require('./profile'))

router.use('/articles', require('./article'))

module.exports = router