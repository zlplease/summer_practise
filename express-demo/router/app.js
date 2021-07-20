const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(req.url)
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log('请求参数', req.query)

    // res.statusCode = 200
    
    // res.write('xixi')

    res.cookie('foo', 'bar')
    res.status(200).send('OK')

    // res.end('hello world')
})

app.listen(3000, () => {
    console.log('I am running at http://localhost:3000/')
})