module.exports.getAllArticles = (req, res) => {
    res.status(200).json({
        message: "getAllArticles"
    })
}

module.exports.getMyArticles = (req, res) => {
    res.status(200).json({
        message: "getMyArticles"
    })
}

module.exports.getArticleInfo = (req, res) => {
    res.status(200).json({
        message: "getArticleInfo"
    })
}

module.exports.createArticle = (req, res) => {
}