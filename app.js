var http = require('http'), 
	app = require('express')()

/*
	Using web framework
*/
app.get('/users', (request, response) => {
	response.json({
		status: 200, 
		users: [
			{
				name: 'user 1', 
				gender: 'female', 
				email: 'user_1@socket.io'
			}, 
			{
				name: 'user 2', 
				gender: 'male', 
				email: 'user_2@socket.io'
			}
		]
	})
})

app.listen(9000, () => {
	console.log('this is from nodejs server')
})

/*
	Using nodejs core
*/
// http.createServer((request, response) => {
// 	response.writeHead(200)
// 	response.write('this is from nodejs server')
// 	response.end()
// }).listen(9000)