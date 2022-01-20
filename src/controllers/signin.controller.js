const express= require('express');
const router = express.Router();

router.get('/',async (req, res) => {
    try{
        return res.render("signinnykaa")
    } catch(err){
        res.send(err.message);
    }
})

module.exports = router;