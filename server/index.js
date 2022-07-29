require('dotenv').config()
const app = require('./app')
const PORT = process.env.PORT || 4300

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))