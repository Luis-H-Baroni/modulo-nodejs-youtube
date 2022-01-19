const express = require("express")
const logger = require("./logger")
const autorizar = require("./autorizar")

const app = express()

app.use("/", [logger, autorizar])

app.get("/", (req, res) => {
	res.send("Home")
})

app.get("/sobre", (req, res) => {
	res.send("sobre")
})

app.listen(5000, () => {
	console.log("servidor rodando")
})
