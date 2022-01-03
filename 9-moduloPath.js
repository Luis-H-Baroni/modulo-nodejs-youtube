const path = require("path")

console.log(path.sep)

const pastaPath = path.join("/conteudo", "subpasta", "teste.txt")
console.log(pastaPath)

const base = path.basename(pastaPath)
console.log(base)

const absoluto = path.resolve(__dirname, "conteudo", "subpasta", "teste.txt")
console.log(absoluto)
