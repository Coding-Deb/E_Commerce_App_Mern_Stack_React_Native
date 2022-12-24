const models = require('../model/CartModel')

const Cartdata = async (req,res)=>{
    try {
        const result = await models.find()
        res.send(result)
    } catch (error) {
        console.log(err);
    }
} 

module.exports = Cartdata