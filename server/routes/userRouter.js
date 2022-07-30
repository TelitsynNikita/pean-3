const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/auth', authMiddleware, controller.check)

module.exports = router