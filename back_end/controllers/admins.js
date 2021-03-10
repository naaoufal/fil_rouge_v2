const Admin = require('../models/admins')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Get all admins:
async function all (req, res) {
    try {
        const admin = await Admin.find()
        res.json(admin)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new admin:
async function createOne (req, res) {
    const admin = new Admin({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        gender : req.body.gender,
        email : req.body.email,
        adress : req.body.adress,
        phone : req.body.phone,
        password : req.body.password
    })
    try {
        const newAdmin = await admin.save()
        res.json(newAdmin)
    } catch (err) {
        res.json({message : err.message})
    }
}

async function login (req, res, next) {
    const {email, password} = req.body
    Admin.findOne({
        email : email,
        password : password
    }).then(admin => {
        if(!admin){
            res.json({message : "You re Not Allowed"})
        } else {
            const email = req.body.email
            const password = req.body.password
            const ad = {ademail : email, adpassword : password}
            const accessToken = jwt.sign(ad, process.env.ACCESS_TOKEN)
            res.json({accessToken : accessToken})
            res.ad = ad
            next()
        }
    })
}


module.exports = {
    all,
    createOne,
    login
}