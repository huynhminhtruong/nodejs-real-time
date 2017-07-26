var fs = require('fs')
var rs = fs.createReadStream('./links.txt')
var events = require('events')
var eventEmitter = new events.EventEmitter()

function emitEvents(event) {
	return eventEmitter.emit(event)
}

eventEmitter.on('read', () => {
	console.log('reading file')
})

eventEmitter.on('open', () => {
	console.log('opening file')
})

function openFile() {
	rs.on('open', () => {
		console.log('open file')
	})
}

module.exports = () => {
	return {
		listening: emitEvents
	}
}