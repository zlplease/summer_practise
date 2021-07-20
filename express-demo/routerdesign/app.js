const { json } = require('express')
const express = require('express')
const fs = require('fs')
const { get } = require('http')
const { getDb} = require('./db')

const app = express()

app.get('/todos', async (req, res) => {
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         res.status(500).json({
    //             err: err.message
    //         })
    //     }

    //     const db = JSON.parse(data)
    //     res.status(200).json(db.todos)
    // })
    // res.send('Hello World!')
    try {
        const db = await getDb()
        res.status(200).json(db.todos)
    } catch (err){
        res.status(500).json({
            err: err.message
        })
    }
})

app.get('/todos/:id', async (req, res) => {
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         res.status(500).json({
    //             err: err.message
    //         })
    //     }

    //     const db = JSON.parse(data)
    //     const todo = db.todos.find(todo => todo.id == req.params.id)

    //     console.log(todo)
    //     if (!todo) {
    //         return res.status(404).end()
    //     }
    //     res.status(200).json(todo)
    // })
    // res.send(`get/todos/${req.params.id}`)
    try {
        const db = await getDb()
        const todo = db.todos.find(todo => todo.id == req.params.id) 
        if (!todo) {
                    return res.status(404).end()
        }
        res.status(200).json(todo)       
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
})

app.post('/todos', (req, res) => {
    res.send('Hello World!')
})

app.patch('/todos/:id', (req, res) => {
    res.send('Hello World!')
})

app.delete('/todos/:id', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('I am running at http://localhost:3000/')
})