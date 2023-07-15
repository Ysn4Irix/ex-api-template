require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const favicon = require('serve-favicon')
const responseTime = require('response-time')
const { join } = require('path')
const logger = require('./helpers/logger')
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

app.use(require('./middlewares/notFoundHandler'))

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
	logger.info(
		`🚀 Server started => listening on PORT: ${PORT} with processId: ${process.pid}`
	)
})

process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

process.on('uncaughtException', error => {
	logger.error('Uncaught Exception thrown:', error)
	process.exit(1)
})

module.exports = app
