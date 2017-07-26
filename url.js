var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((request, response) => {
	if (request.method == 'GET' && request.url == '/message') {
		response.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8', 
			'X-Power-By': 'TruongHM'
		})

		response.write('<h1>Send data from NodeJS server</h1>')

		response.end()
	}
}).listen(8080)