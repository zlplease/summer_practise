const express = require('express')

const app = express()

const router = require('./router')

const myLogger = (req) => {
    console.log(req.method, req.url, Date.now())
}

//中间件:所有请求都需经过它,匹配所有请求
//AOP面向切面编程：将日志记录，性能统计，安全控制，事务处理，异常处理等代码从业务逻辑代码中划分
//将其独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码
//在现有代码中，在程序生命周期或横向流程中加入\减去一个或多个功能，不影响原有功能
// app.use((req, res, next) => {
//     console.log(req.method, req.url, Date.now())
//     //交出执行权,往后继续匹配执行
//     next()
// })

//对中间件进行封装
// function json (options) {
//     return (req, res, next) => {
//         console.log(`hello ${options.message}`)
//         next()
//     }
// }

// app.use(json({
//     message: 'world'
// }))

//不做任何限定的中间件
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
// })

//限定请求路径
// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type', req.method)
//     next()
// })

//处理多个函数
// app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// })

//要从路由器中间件堆栈中跳过其余中间件，调用next('route')将控制权传递给下一条路由
//仅在app.METHOD()或router.METHOD()函数加载中间件函数有效

//中间件可以在数组中声明为可重用
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}

var logStuff = [logOriginalUrl, logMethod]

app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User Info')
})

//所有路由都具有next,只是不限制规则
//限定请求方法与路径
app.get('/', (req, res) => {
    //打印请求日志
    // console.log(req.method, req.url, Date.now())
    // myLogger(req)
    res.send('get /')
})
 
app.get('/about', (req, res) => {
    // myLogger(req)
    res.send('get /about')
})

app.post('/login', (req, res) => {
    // myLogger(req)
    res.send('post /login')
})

//挂载路由
// app.use(router)

//限定前缀,相当于增加/abc
app.use('/abc', router)

//在所有中间件之后挂载错误处理中间件，通过next(err)传递至此
app.use((err, req, res, next) => {
    console.log('错误：', err)
})

app.listen(3000, () => {
    console.log('I am running at http://localhost:3000/')
})