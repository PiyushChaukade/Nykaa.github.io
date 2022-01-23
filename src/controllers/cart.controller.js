const express= require('express');
const router = express.Router();
const Cart= require("../models/cart.model")


router.get('/', async (req, res) => {
    try{
         const carts= await Cart.find().populate({path:"product_id", select: { product_name: 1,
             MRP:1,MRPsort:1,image_url:1}}).lean().exec();
         
         res.status(200).send(carts);
        } catch (err) { 
            console.log(err.message);
        }
})

router.post('/', async (req, res) => {
    try{
         const carts= await Cart.create(req.body);
    
         res.status(200).send(carts);
        } catch (err) { 
            console.log(err.message);
        }
})

module.exports = router;
