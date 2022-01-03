const os = require("os")

const user = os.userInfo()
console.log(user)

console.log(os.uptime())

const SO = {
	nome: os.type(),
	release: os.release(),
	memoria: os.totalmem(),
	memoriaLivre: os.freemem(),
}
console.log(SO)
