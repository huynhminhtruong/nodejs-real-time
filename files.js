var http = require('http')
var fs = require('fs')
var events = require('events')
var fileEmitter = new events.EventEmitter()
var MyEvent = require('./events')()

http.createServer((request, response) => {
	/*
		fs.writeFile('./links.txt', 'www.google.com', (error) => {
			if (error) console.log(error)
			console.log('saved')
		})
	*/

	setTimeout(() => {
		fs.appendFile('./links.txt', 'www.google.com', (error) => {
			if (error) console.log(error)
			console.log('updated')
		})
	}, 3000)

	// MyEvent.read((object) => {
	// 	fs.unlink('./links.txt', (error) => {
	// 		if (error) console.log(error)
	// 		console.log('deleted')
	// 	})
	// })

	// MyEvent.open((object) => {
	// 	fs.readFile('./links.txt', (error, data) => {
	// 		response.writeHead(200)
	// 		response.write(data)
	// 		response.end()
	// 	})
	// })

	MyEvent.listening('read')
}).listen(9000)