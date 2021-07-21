const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
const connection = require('./model/connection')

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

const port = process.env.port || 3000

app.use('/api', router)

app.use(errorHandler())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))