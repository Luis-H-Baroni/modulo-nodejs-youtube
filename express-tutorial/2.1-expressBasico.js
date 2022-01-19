const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.status(200).send("homepage")
})

app.get("/sobre", (req, res) => {
	res.status(200).send("sobre")
})

app.all("*", (req, res) => {
	res.status(404).send("<h1>404 page not found</h1>")
})

app.listen(5000, () => {
	console.log("servidor rodando")
})
