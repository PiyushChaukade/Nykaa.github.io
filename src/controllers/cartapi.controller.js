const express= require('express');
const router = express.Router();

const Product= require("../models/products.model")
const Cart= require("../models/cart.model")


router.post('/:id/products', async (req, res) => {
    try{
         const products= await Product.find().lean().exec();
    
         res.status(200).send(products);
        } catch (err) { 
            console.log(err.message);
        }
})


module.exports = router;