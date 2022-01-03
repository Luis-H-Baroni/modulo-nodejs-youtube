const { readFileSync, writeFileSync } = require("fs")

const primeiro = readFileSync("./conteudo/primeiro.txt", "utf8")
const segundo = readFileSync("./conteudo/subpasta/teste.txt", "utf8")
console.log(primeiro, segundo)

writeFileSync(
	"./conteudo/resultadoSync.txt",
	`Resultado do writeFileSync. 
    Primeiro:${primeiro}
    Segundo:${segundo}`,
	{ flag: "a" }
)
