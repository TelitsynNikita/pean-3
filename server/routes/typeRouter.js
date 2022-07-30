const express = require('express')
const router = express.Router()
const controller = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), controller.create)
router.get('/', controller.getAll)

module.exports = router