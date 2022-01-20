const express= require('express');
const router = express.Router();

const Product= require("../models/products.model")



// router.get('/',async (req, res) => {
//     try{
//         const prods= await Product.find().lean().exec();
//        //console.log(prods)
//         return res.render("productsnew")
//         // .send(prods)

//     } catch(err){
//         res.send(err.message);
//     }
// })

router.get('/',async (req, res) => {
    try{
        const prods= await Product.find().lean().exec();
    // console.log(prods)
 //prods=JSON.parse(prods)
  

        return res.render("productsnew",prods)

    } catch(err){
        res.send(err.message);
    }
})

module.exports = router;