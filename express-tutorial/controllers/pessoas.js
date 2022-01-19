let { people } = require("../data")

const getPessoas = (req, res) => {
	res.status(200).json({ sucess: true, data: people })
}

const criarPessoa = (req, res) => {
	const { name } = req.body
	if (!name) {
		return res.status(400).json({ success: false, msg: "Entre com um nome" })
	}
	res.status(201).json({ success: true, person: name })
}

const criarPessoaPostman = (req, res) => {
	const { name } = req.body
	if (!name) {
		return res.status(400).json({ success: false, msg: "Entre com um nome" })
	}
	res.status(201).json({ success: true, data: [...people, name] })
}

const updatePessoa = (req, res) => {
	const { id } = req.params
	const { name } = req.body

	const pessoa = people.find((pessoa) => {
		return pessoa.id === Number(id)
	})
	console.log(pessoa)

	if (!pessoa) {
		return res
			.status(404)
			.json({ success: false, msg: `nenhuma pessoa com o id ${id}` })
	}

	const novaPessoa = people.map((pessoa) => {
		if (pessoa.id === Number(id)) {
			pessoa.name = name
		}
		return pessoa
	})
	res.status(200).json({ success: true, data: novaPessoa })
}

const deletarPessoa = (req, res) => {
	const pessoa = people.find((pessoa) => {
		return pessoa.id === Number(req.params.id)
	})

	if (!pessoa) {
		return res.status(404).json({
			success: false,
			msg: `nenhuma pessoa encontrada com o id ${req.params.id}`,
		})
	}

	const novaPessoa = people.filter((pessoa) => {
		return pessoa.id !== Number(req.params.id)
	})
	return res.status(200).json({ success: true, data: novaPessoa })
}

module.exports = {
	getPessoas,
	criarPessoa,
	criarPessoaPostman,
	updatePessoa,
	deletarPessoa,
}
