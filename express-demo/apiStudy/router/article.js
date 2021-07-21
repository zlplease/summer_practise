const express = require('express')
const articleCtrl = require('../controller/article')

const router = express.Router()

router.get('/', articleCtrl.listArticle)

router.get('/feed', articleCtrl.feedArticle)

router.get('/:slug', articleCtrl.getArticle)

router.post('/', articleCtrl.createArticle)

router.put('/:slug', articleCtrl.updateArticle)

router.delete('/:slug', articleCtrl.deleteArticle)

router.get('/:slug/comments', articleCtrl.getComments)

router.delete('/:slug/comments/:id', articleCtrl.deleteArticle)

router.post('/:slug/favorite', articleCtrl.getFavorite)

router.delete('/:slug/favorite', articleCtrl.deletefavorite)

module.exports = router