const express= require('express');
const router = express.Router();

const Product= require("../models/products.model")


router.get('/', (req, res) => {
    try{
        // const prods= await Product.find().lean().exec();
    // console.log(prods)
    //prods=JSON.parse(prods)
    //    res.send(prods)
       res.render("productsnew")

    } catch(err){
        res.send(err.message);
    }
})


module.exports = router;



// const router = require('express').Router()


// router.get("/menjackets", (req, res) => {
//     res.render("product page/productjackets");
//   });
  
// router.get("/menjeans", (req, res) => {
//     res.render("product page/productjeans");
// });
  
// router.get("/womenjeans", (req, res) => {
//     res.render("product page/productwomenjeans");
//   });

// router.get("/womentshirt", (req, res) => {
//     res.render("product page/productwomentshirt");
//   });
// module.exports = router;