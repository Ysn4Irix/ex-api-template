const { StatusCodes, getReasonPhrase } = require('http-status-codes')
const { error } = require('../helpers/apiResponse')

/**
 * @param {import('@types/express').Request} req
 * @param {import('@types/express').Response} res
 */
const notFound = (req, res, next) => {
	res.status(StatusCodes.NOT_FOUND).json(
		error(
			getReasonPhrase(StatusCodes.NOT_FOUND),
			res.statusCode,
			`Request Not Found 😢 - ${req.originalUrl}`
		)
	)
}

module.exports = notFound
