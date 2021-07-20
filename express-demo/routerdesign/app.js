const { json } = require('express')
const express = require('express')
const fs = require('fs')
const { get } = require('http')
const { getDb, saveDb } = require('./db')

const app = express()

//解析表单请求体； application/json
app.use(express.json())
//解析表单请求体； urlencoded
app.use(express.urlencoded())

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
    } catch (err) {
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

app.post('/todos', async (req, res) => {
    // console.log(req.body)
    // res.send('Hello World!')
    try {

        const todo = req.body

        if (!todo.title) {
            return res.status(422).json({
                error: 'The field title is required'
            })
        }

        const db = await getDb()
        const lastTodo = db.todos[db.todos.length - 1]
        todo.id = lastTodo ? lastTodo.id + 1 : 1
        db.todos.push(todo)

        await saveDb(db)

        res.status(200).json(todo)

    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }

})

app.patch('/todos/:id', async (req, res) => {
    // res.send('Hello World!')
    try {

        const todo = req.body
        const db = await getDb()
        const ret = db.todos.find(todo => todo.id == req.params.id)

        if (!ret) {
            return res.status(404).end()
        }

        Object.assign(ret, todo)
        await saveDb(db)

        res.status(200).json(ret)
    } catch(err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.delete('/todos/:id', async (req, res) => {
    try {
        const todoId = Number.parseInt(req.params.id)
        const db = await getDb()
        const index = db.todos.findIndex( todo => todo.id === todoId)
        if (index === -1) {
            return res.status(404).end()
        }

        db.todos.splice(index, 1)
        await saveDb(db)
        res.status(204).end()
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.listen(3000, () => {
    console.log('I am running at http://localhost:3000/')
})