exports.getTags = async(req, res, next) => {
    try {
        res.send('getTags')
    } catch (error) {
        next(error)
    }
}