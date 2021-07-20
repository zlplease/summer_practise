const  express = require('express')

//创建路由实例
const router = express.Router()

router.get('/foo', (req, res) => {
    res.send('get /foo')
})

module.exports = router