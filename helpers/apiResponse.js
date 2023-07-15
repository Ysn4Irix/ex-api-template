/**
 * @param {string} message
 * @param {object} response
 * @param {number} statusCode
 * @returns An object
 */

const success = (message, statusCode, response) => {
	return {
		error: false,
		message,
		statusCode,
		response
	}
}

/**
 * @param {string} message
 * @param {object} response
 * @param {string} statusCode
 * @returns returns an object
 */

const error = (message, statusCode, response) => {
	const codes = [200, 201, 400, 401, 404, 403, 422, 500]

	const codeFinder = codes.find(code => code === statusCode)

	if (!codeFinder) statusCode = 500
	else statusCode = codeFinder

	return {
		error: true,
		message,
		statusCode,
		response
	}
}

module.exports = {
	success,
	error
}
