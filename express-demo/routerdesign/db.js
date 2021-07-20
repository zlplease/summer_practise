const fs = require('fs')
const { promisify} = require('util')
const path = require('path')

const readFile = promisify(fs.readFile)

const dbpath = path.join(__dirname, './db.json')

exports.getDb = async () => {
    const data = await readFile(dbpath, 'utf8')
    return JSON.parse(data)
}