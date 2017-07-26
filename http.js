var http = require('http')

http.createServer((request, response) => {
	http.get({
		host: 'www.suzukivungtau.com.vn'
	}, (res) => {
		res.setEncoding('utf8')

		var body = ''

		res.on('data', (chunk) => {
			body += chunk
		})

		res.on('end', () => {
			console.log('end')
			response.writeHead(200, {
				'Content-Type': 'text/html; charset=utf-8', 
				'X-Power-By': 'TruongHM'
			})
			response.write(body)
			response.end()
		})
	}).on('error', (error) => {
		console.log('error: ', error)
	})
}).listen(9000)