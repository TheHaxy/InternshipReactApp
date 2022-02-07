const express = require("express")
const controller = require("../controllers/article")
const router = express.Router()

router.get('/main-page', controller.getAllArticles)
router.get('/my-articles', controller.getMyArticles)
router.get('/article-page:id', controller.getArticleInfo)
router.post('/create-article', controller.createArticle)

module.exports = router