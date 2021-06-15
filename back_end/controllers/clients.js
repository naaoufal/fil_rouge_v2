const Client = require('../models/clients')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const nodemailer = require('nodemailer')

// get all Clients :
async function all (req, res) {
    try {
        const client = await Client.find()
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new Client :
async function createOne (req, res) {
    const client = new Client({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        image : req.file.filename,
        gender : req.body.gender,
        email : req.body.email,
        adress : req.body.adress,
        phone : req.body.phone,
        password : req.body.password,
        is_valid : req.body.is_valid,
        suspended : req.body.suspended
    })
    try {
        const newClient = await client.save()
        res.json(newClient)
    } catch (err) {
        res.json({message : err.message})
    }
}

// auth a client (Json Web Token) :
async function login (req, res, next) {
    const {email, password} = req.body
    Client.findOne({
        email : email,
        password : password
    }).then(client => {
        if(!client) {
            res.json({message : "You re Not Allowed"})
        } else {
            const email = req.body.email
            const password = req.body.password
            const cl = {clemail : email, clpassword : password}
            const accessToken = jwt.sign(cl, process.env.ACCESS_TOKEN_CLIENT)
            res.json({accessToken : accessToken})
            res.cl = cl
            next()
        }
    })
}

module.exports = {
    all,
    login,
    createOne
}