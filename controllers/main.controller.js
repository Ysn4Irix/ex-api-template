const { successResponse } = require('../helpers/apiResponse')
const { StatusCodes, getReasonPhrase } = require('http-status-codes')
const logger = require('../helpers/logger')

module.exports = {
	/**
	 * @desc check whatever the server is up or not
	 * @param {import('@types/express').Request} _
	 * @param {import('@types/express').Response} res
	 * @param {import('@types/express').NextFunction} next
	 * @returns {object} object
	 */
	healthcheck: (_, res, next) => {
		try {
			res.status(StatusCodes.OK).json(
				successResponse(
					getReasonPhrase(StatusCodes.OK),
					res.statusCode,
					'Server is up and running'
				)
			)
		} catch (err) {
			logger.error(err.message)
			next(err)
		}
	}
}
