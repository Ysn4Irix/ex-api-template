const router = require('express').Router()

const uptime = require('../controllers/index.controller')

router.get('/', uptime)

module.exports = router