const express = require('express')

const morgan = require('morgan')
const cors = require('cors')

require('./database')

require('dotenv').config({path:'variables.env'})

const app = express()
app.set('port', process.env.PORT || 5001)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/user/activity', require('./routes/act.routes'))

app.listen(5001)
console.log('Server running')