const uptimeFormat = require('../helpers/upTime')
const {
    success
} = require('../helpers/apiResponse')

module.exports = {
	alive: (req, res) => {
		res.status(200).json(
			success("🎉I'm alive", {
				upTime: uptimeFormat(process.uptime())
			})
		)
	}
}