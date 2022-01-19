const express = require("express")
const pessoas = require("./routes/pessoas")
const autenticar = require("./routes/autenticar")
const app = express()

app.use(express.static("./methods-public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/pessoas", pessoas)
app.use("/login", autenticar)

app.listen(5000, () => {
	console.log("servidor rodando")
})

module.exports = app
