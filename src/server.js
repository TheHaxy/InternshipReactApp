const express = require("express")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/auth")
const articleRoutes = require("./routes/article")
const profileRoutes = require("./routes/profile")
const app = express()

const port = process.env.PORT || 5000

app.use(require("morgan")("dev"))
app.use(require("cors")())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Port ${port} active!`))

app.get("/", (req, res) => {
    res.status(200).json({message: "hello world!"})
})

app.use("/api/auth", authRoutes)
app.use("/api/article", articleRoutes)
app.use("/api", profileRoutes)
