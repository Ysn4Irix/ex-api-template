require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const responseTime = require('response-time')
const logger = require('./helpers/logger')
const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
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
	logger.success(
		`🚀 Server started => listening on PORT: ${port} with processId: ${process.pid}`
	)
})

process.on('SIGINT', () => {
	logger.info('SIGINT signal received.')
	logger.info('Server is closing.')
	server.close(() => {
		logger.info('Server closed.')
		process.exit(0)
	})
})

process.on('SIGTERM', () => {
	logger.info('SIGTERM signal received.')
	logger.info('Server is closed.')
	server.close(() => {
		logger.info('Server closed.')
		process.exit(0)
	})
})

module.exports = app
