const uptimeFormat = require('../helpers/upTime')
const { success, error } = require('../helpers/apiResponse')
const logger = require('../helpers/logger')

module.exports = {
	alive: (req, res) => {
		try {
			res.status(200).json(
				success("🎉I'm alive", {
					upTime: uptimeFormat(process.uptime())
				})
			)
		} catch (err) {
			logger.error({
				message: err.message,
				stack: err.stack
			})
			res.status(500).json(
				error(
					'Oops! We have an problem in our backend 😢',
					res.statusCode
				)
			)
		}
	}
}
