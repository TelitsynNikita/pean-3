require('dotenv').config()
const app = require('./app')
const PORT = process.env.PORT || 4300

app.listen(1243, () => console.log(`Сервер стартанул на ${PORT} порту`))