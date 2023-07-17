const rateLimit = require('express-rate-limit')
const { errorResponse } = require('../helpers/apiResponse')
const { StatusCodes, getReasonPhrase } = require('http-status-codes')

const rateLimiter = rateLimit({
	windowMs: 30 * 1000, // 30 seconds
	max: 10, // limit each IP to 10 requests per windowMs
	message: errorResponse(
		getReasonPhrase(StatusCodes.TOO_MANY_REQUESTS),
		StatusCodes.TOO_MANY_REQUESTS,
		{
			message:
				'Too many requests from this IP, please try again after 30 seconds'
		}
	)
})

module.exports = rateLimiter
