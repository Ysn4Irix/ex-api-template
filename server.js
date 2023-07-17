require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const favicon = require('serve-favicon')
const responseTime = require('response-time')
const { join } = require('path')
const logger = require('./helpers/logger')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const { router } = require('./routes')
const app = express()

app.use(responseTime())
app.use(helmet())
app.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200
	})
)
app.use(compression())
app.use(favicon(join(__dirname, 'public', 'favicon.ico')))
app.use(express.json())
app.use(
	express.urlencoded({
		extended: false
	})
)

app.use('/api', router)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'
app.listen(PORT, () => {
	logger.info(
		`🚀 Server started at ${HOST} on PORT ${PORT} with processId: ${process.pid}`
	)
})

process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
	process.exit(1)
})

process.on('uncaughtException', error => {
	logger.error('Uncaught Exception thrown:', error)
	process.exit(1)
})

module.exports = app
