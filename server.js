var http = require('http'), 
	app = require('express')()

/*
	Using web framework
*/
// app.listen(9000, () => {
// 	console.log('this is from nodejs server')
// })

/*
	Using nodejs core
*/
http.createServer((request, response) => {
	response.writeHead(200)
	response.write('this is from nodejs server')
	response.end()
}).listen(9000)