const express = require('express')
const cors = require('cors')

const app = express()

const {
  PORT
} = require('../ config/environment')

app.use(cors())
app.use('/', express.static('public'))

app.listen(PORT, () => console.log(`Express is listening on PORT: ${PORT}`))