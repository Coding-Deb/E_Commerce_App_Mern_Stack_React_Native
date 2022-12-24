const express = require('express')

const Route = express.Router()
const LoginModel = require('../model/LoginModel')
const CartModel = require('../model/CartModel')
const Cartdata = require('../controller/Cartcontroller')

Route.post('/logindata', (req, res) => {
    const Logindata = new LoginModel({
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
    })

    if (!req.body.email || !req.body.password || !req.body.number) {
        res.send('Please Fill The Fields')
    }
    else {
        Logindata.save()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    }
})

Route.post('/Cart', (req, res) => {
    const Products = new CartModel({
        name: req.body.name,
        details: req.body.details,
        price: req.body.price,
        type: req.body.type,
    })
    if (!req.body.name || !req.body.details || !req.body.price || !req.body.type) {
        res.send('Please Fill The Fields')
    }
    else {
        Products.save()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    }
})

Route.get('/Cartdata',Cartdata)

module.exports = Route