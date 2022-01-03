const { readFile, writeFile } = require("fs")

readFile("./conteudo/primeiro.txt", "utf8", (erro, resultado) => {
	if (erro) {
		console.log(erro)
		return
	}
	const primeiro = resultado
	readFile("./conteudo/subpasta/teste.txt", "utf8", (erro, resultado) => {
		if (erro) {
			console.log(erro)
			return
		}
		const segundo = resultado
		writeFile(
			"./conteudo/resultadoAsync.txt",
			`Resultado do writeFileSync. 
        Primeiro:${primeiro}
        Segundo:${segundo}`,
			(erro, resultado) => {
				if (erro) {
					console.log(erro)
					return
				}
				console.log(resultado)
			}
		)
	})
})
