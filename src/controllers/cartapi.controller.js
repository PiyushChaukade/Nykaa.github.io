const express= require('express');
const router = express.Router();

//const Cart= require("../models/cart.model")
//const ProductSchema = require('../models/products.model');


// router.get('/', async (req, res) => {
//     try{
//          const products= await Cart.find().lean().exec();
    
//          res.status(200).send(products);
//         } catch (err) { 
//             console.log(err.message);
//         }
// })


// router.get('/:id', async (req, res) => {
//     try{
//          const carts= await Cart.findById(req.params.id).populate({path:"product_id", select :{product_name:1}})
//          .lean().exec();
    
//          res.status(200).send(carts);
//         } catch (err) { 
//             console.log(err.message);
//         }
// })

// router.post('/', async (req, res) => {
//     try{  console.log("req", req)
//          const cart= await Cart.create(req.body);
    
//          res.status(200).send(cart);
//         } catch (err) { 
//             console.log(err.message);
//         }
// })

router.get('/', async (req, res) =>{
    try {
        //const carts = await Cart.create({_id: req.params.id})

        res.render('index')
    }catch(e){
        console.error(e);
    }
})

module.exports = router;