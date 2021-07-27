const express = require('express')
const userCtrl = require('../controller/user')
const { body, validationResult } = require('express-validator');


const router = express.Router()


router.post('/users/login', userCtrl.login)

router.post('/users', [
    body('user.username').notEmpty().withMessage('用户名不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确'),
], (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    next()
}, userCtrl.register)

router.get('/user', userCtrl.getCurrentUser)

router.put('/user', userCtrl.updateCurrentUser)

module.exports = router