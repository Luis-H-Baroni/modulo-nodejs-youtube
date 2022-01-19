const express = require("express")
const router = express.Router()

//form
router.post("/", (req, res) => {
	const { name } = req.body
	if (name) {
		return res.status(200).send(`Bem-vindo ${name}`)
	}
	res.status(401).send("Entre com as credenciais")
})

module.exports = router
