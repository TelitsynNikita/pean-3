class AuthController {
    login(req, res) {
        res.status(200).json({
            message: 'hello'
        })
    }
}

module.exports = new AuthController()