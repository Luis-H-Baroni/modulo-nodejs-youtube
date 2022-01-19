const autorizar = (req, res, next) => {
	const { user } = req.query
	if (user === "joao") {
		req.user = { nome: "joao", id: 3 }
		next()
	} else {
		res.status(401).send("Nao Autorizado")
	}
}

module.exports = autorizar
