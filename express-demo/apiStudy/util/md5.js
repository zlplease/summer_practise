const crypto = require('crypto')

// console.log(crypto.getHashes())

// const ret = crypto.createHash('md5')
//     .update('hello')
//     .digest('hex')

// console.log(ret)

module.exports = str => {
    return crypto.createHash('md5')
        .update('zlp' + str)
        .digest('hex')
}