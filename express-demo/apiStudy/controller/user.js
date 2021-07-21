exports.login = async (req, res, next) => {
    try {
        res.send('post /users/login')
    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    try {
        console.log(req.body)
        res.send('post /users')
    } catch (error) {
        next(error)
    }
}

exports.getCurrentUser = async (req, res, next) => {
    try {
        
        res.send('getCurrentUser')
    } catch (error) {
        next(error)
    }
}

exports.updateCurrentUser = async (req, res, next) => {
    try {
        
        res.send('updateCurrentUser')
    } catch (error) {
        next(error)
    }
}