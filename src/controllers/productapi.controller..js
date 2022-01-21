const express= require('express');
const router = express.Router();

const Product= require("../models/products.model")


router.get('/', async (req, res) => {
    try{
         const products= await Product.find().lean().exec();
    
         res.status(200).send(products);
        } catch (err) { 
            console.log(err.message);
        }
})

// router.get("/men/productjacket", async (req, res) => {
//     try {
//         const product = await ProductSchema.find({ producttype: { $eq: "jacket" } });
   
//         res.status(200).send(product);
//     } catch (err) { 
//         console.log(err.message);
//     }
// });

module.exports = router;
