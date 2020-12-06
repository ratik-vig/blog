const express = require('express')
const users = require('./api/routes/users')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('home route')
})

app.use('/api/user', users)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})