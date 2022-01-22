const express= require('express');
const router = express.Router();

const Cart= require("../models/cart.model")


router.get('/', async (req, res) => {
    try{
         const products= await Cart.find().lean().exec();
    
         res.status(200).send(products);
        } catch (err) { 
            console.log(err.message);
        }
})


module.exports = router;