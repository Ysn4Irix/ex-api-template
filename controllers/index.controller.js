const uptimeFormat = require('../helpers/upTime')
const {
    success
} = require('../helpers/apiResponse')

module.exports = (req, res) => {
    res.status(200).json(success("🎉I'm alive", {
        upTime: uptimeFormat(process.uptime())
    }))
}