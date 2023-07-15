const { success, error } = require('../helpers/apiResponse')
const { StatusCodes, getReasonPhrase } = require('http-status-codes')
const logger = require('../helpers/logger')

module.exports = {
	/**
	 * @desc check whatever the server is up or not
	 * @param {import('@types/express').Request} _
	 * @param {import('@types/express').Response} res
	 * @returns {object} object
	 */
	healthcheck: (_, res) => {
		try {
			res.status(StatusCodes.OK).json(
				success(
					getReasonPhrase(StatusCodes.OK),
					res.statusCode,
					'Server is up and running'
				)
			)
		} catch (err) {
			logger.error(err.message)
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
				error(
					getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
					res.statusCode,
					'Oops! We have an problem in our server 😢'
				)
			)
		}
	}
}
