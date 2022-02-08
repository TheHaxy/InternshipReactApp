const express = require("express")
const passport = require("passport")
const controller = require("../controllers/article")
const router = express.Router()

router.get('/main-page', controller.getAllArticles)
router.get('/my-articles', passport.authenticate("jwt", {session: false}), controller.getMyArticles)
router.get('/article-page:id', passport.authenticate("jwt", {session: false}), controller.getArticleInfo)
router.post('/create-article', passport.authenticate("jwt", {session: false}), controller.createArticle)

module.exports = router