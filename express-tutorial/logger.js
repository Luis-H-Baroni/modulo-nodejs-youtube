const logger = (req, res, next) => {
	const method = req.method
	const url = req.url
	const data = new Date().getFullYear()
	console.log(method, url, data)
	next()
}

module.exports = logger
