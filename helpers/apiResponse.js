const successResponse = (statusMessage, statusCode, response) => {
	return {
		isError: false,
		statusMessage,
		statusCode,
		response
	}
}

const errorResponse = (statusMessage, statusCode, error) => {
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
