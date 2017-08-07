const http = require('http')
const server = http.createServer()

server.on('request', (request, response) => {
	console.log('client request')
})

server.listen(9000)