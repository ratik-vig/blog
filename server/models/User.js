const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        min: 2, 
        max: 20,
        required: true
    },
    lastName: {
        type: String,
        min: 2,
        max: 20,
        required: true
    },
    email: {
        type: String,
        min: 10,
        max: 255,
        required: true

    },
    password: {
        type: String, 
        min: 8,
        max: 1024,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)