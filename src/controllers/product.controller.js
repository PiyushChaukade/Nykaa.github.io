const express= require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    try{
    
       res.render("productsnew");
    } catch(err){
        res.send(err.message);
    }
})
// router.get("/menjackets", (req, res) => {
//     res.render("product page/productjackets");
//   });

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