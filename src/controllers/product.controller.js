const express= require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    try{
    
       res.render("productsnew");
    } catch(err){
        res.send(err.message);
    }
})

module.exports = router;


