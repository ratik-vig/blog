const express = require('express')
const joi = require('@hapi/joi')
const User = require('../../models/User')
const Joi = require('joi')

const router = express.Router()

const registerSchema = Joi.object({
    firstName: Joi.string()
            .min(2)
            .max(20)
            .required(),
    lastName: Joi.string()
            .min(2)
            .max(20)
            .required(),
    email: Joi.string()
            .min(6)
            .max(255)
            .email()
            .required(),
    password: Joi.string()
            .min(8)
            .max(1024)
            .required()
})


router.get('/', (req, res) => {
    res.send('user route')
})

router.get('/new', (req, res) => {
    res.send('create new user')
})

router.post('/register', async (req, res) => {
    try{
        const v = await registerSchema.validateAsync(req.body)
        res.send(v)
    }catch(error){
        res.send(error.details[0].message)
    }
    // const user = new User({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName, 
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // try{
    //     const response = await user.save()
    //     res.send(response)
    // }catch(err){
    //     console.log(err)
    // }
})

module.exports = router