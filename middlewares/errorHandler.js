const { StatusCodes, getReasonPhrase } = require('http-status-codes')
const { errorResponse } = require('../helpers/apiResponse')
const { NODE_ENV } = process.env

/**
 * @param {import('@types/express').Request} req
 * @param {import('@types/express').Response} res
 */
const notFound = (req, res, next) => {
	res.status(StatusCodes.NOT_FOUND)
	const err = new Error(`requested url ${req.originalUrl} not found`)
	next(err)
}

/**
 *
 * @param {import('@types/express').ErrorRequestHandler} err
 * @param {import('@types/express').Request} req
 * @param {import('@types/express').Response} res
 * @param {import('@types/express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
	const statusCode =
		res.statusCode === 200
			? StatusCodes.INTERNAL_SERVER_ERROR
			: res.statusCode

	res.status(statusCode).json(
		errorResponse(getReasonPhrase(statusCode), statusCode, {
			message:
				statusCode === StatusCodes.INTERNAL_SERVER_ERROR
					? 'Oops! there was an error while processing your request 😢'
					: err.message,
			stack: NODE_ENV === 'prod' ? '🙄🙄' : err.stack
		})
	)
}

module.exports = { notFound, errorHandler }
