require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const responseTime = require('response-time')
const app = express()

if (process.env.NODE_ENV === 'development') app.use(logger('dev'))
app.use(responseTime())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(
	express.urlencoded({
		extended: false
	})
)

app.use('/api', require('./routes/index.route'))

app.use(require('./middlewares/notFoundHandler'))

const port = process.env.PORT
const server = app.listen(port, () => {
	console.log(
		`🚀 Server started => listening on PORT: ${port} with processId: ${process.pid}`
	)
})

process.on('SIGINT', () => {
	console.info('SIGINT signal received.')
	console.log('Server is closing.')
	server.close(() => {
		console.log('Server closed.')
		process.exit(0)
	})
})

process.on('SIGTERM', () => {
	console.info('SIGTERM signal received.')
	console.log('Server is closed.')
	server.close(() => {
		console.log('Server closed.')
		process.exit(0)
	})
})

module.exports = app
