/**
 * @param {string} statusMessage
 * @param {object} response
 * @param {number} statusCode
 * @returns An object
 */

const successResponse = (statusMessage, statusCode, response) => {
	return {
		isError: false,
		statusMessage,
		statusCode,
		response
	}
}

/**
 * @param {string} statusMessage
 * @param {object} error
 * @param {string} statusCode
 * @returns returns an object
 */

const errorResponse = (statusMessage, statusCode, error) => {
	const codes = [200, 201, 400, 401, 404, 403, 422, 500]

	const codeFinder = codes.find(code => code === statusCode)

	if (!codeFinder) statusCode = 500
	else statusCode = codeFinder

	return {
		isError: true,
		statusMessage,
		statusCode,
		error
	}
}

module.exports = {
	successResponse,
	errorResponse
}
