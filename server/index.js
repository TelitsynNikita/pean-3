require('dotenv').config()
const app = require('./app')
const sequelize = require('./bd')
const PORT = process.env.PORT || 4300

const start = async () => {
    try {
        await sequelize.authenticate().then(() => console.log('DB CONNECTED'))
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))
    } catch (e) {
        console.log(e.message)
    }
}

start()