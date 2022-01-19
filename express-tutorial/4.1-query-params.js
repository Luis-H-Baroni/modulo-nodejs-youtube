const express = require("express")
const { products } = require("./data")

const app = express()

app.get("/", (req, res) => {
	res.send("<h1>Home Page</h1> <a href=/api/produtos>produtos</a>")
})

app.get("/api/produtos", (req, res) => {
	const produtosFiltrados = products.map((produto) => {
		const { id, name, image } = produto
		return { id, name, image }
	})

	res.json(produtosFiltrados)
})

app.get("/api/produtos/:id", (req, res) => {
	const { id } = req.params

	const produtoUnico = products.find((produto) => produto.id === Number(id))

	if (!produtoUnico) {
		return res.status(404).send("Produto não encontrado")
	}
	res.json(produtoUnico)
})

app.get("/api/v1/query", (req, res) => {
	const { search, limite } = req.query
	let produtosSortidos = [...products]

	if (search) {
		produtosSortidos = produtosSortidos.filter((produto) => {
			return produto.name.startsWith(search)
		})
	}
	if (limite) {
		produtosSortidos = produtosSortidos.slice(0, Number(limite))
	}
	if (produtosSortidos.length < 1) {
		return res.status(200).json({ status: "200", dados: [] })
	}
	res.status(200).json(produtosSortidos)
})

app.listen(5000, () => {
	console.log("servidor rodando")
})
