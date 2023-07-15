const router = require('express').Router()

const { healthcheck } = require('../controllers/main.controller')

router.get('/', healthcheck)

module.exports = { router }
