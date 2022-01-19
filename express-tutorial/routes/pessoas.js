const express = require("express")
const router = express.Router()
const pessoas = require("../controllers/pessoas")

/* router.get("/", pessoas.getPessoas)

router.post("/", pessoas.criarPessoa)

router.post("/pessoas", pessoas.criarPessoaPostman)

router.put("/:id", pessoas.updatePessoa)

router.delete("/:id", pessoas.deletarPessoa) */

router.route("/").get(pessoas.getPessoas).post(pessoas.criarPessoa)

router.route("/pessoas").post(pessoas.criarPessoaPostman)

router.route("/:id").put(pessoas.updatePessoa).delete(pessoas.deletarPessoa)

module.exports = router
