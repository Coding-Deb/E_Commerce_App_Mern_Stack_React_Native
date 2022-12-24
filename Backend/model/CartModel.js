const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('CartDetails', CartSchema)