const http = require("http")

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("home page")
	} else if (req.url === "/about") {
		res.end("pagina sobre")
	} else {
		res.end(`<h1>OOOPS!</h1>
    <p>Pagina nao encontrada</p>
    <a href=/>Home</a>`)
	}
})

server.listen(5000)
