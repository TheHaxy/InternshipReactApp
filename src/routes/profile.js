const express = require("express")
const controller = require("../controllers/profile")
const router = express.Router()

router.patch('/profile', controller.changeProfile)

module.exports = router