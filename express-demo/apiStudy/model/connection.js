var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'realworld'
})

connection.connect(function  (err) {
  if(err) {
    console.log("err" + err.stack)
    return
  }
  console.log("connection id " + connection.threadId)
})

module.exports = connection