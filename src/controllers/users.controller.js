const express = require("express");

const User = require("../models/users.model");

const crudController = require("./crud.controller")
const router = express.Router();

router.get("", crudController(User,"index").get)

// router.get("", async (req,res) => {

// try {
    
//     const users= await User.find().lean().exec();
//     return res.status(200).send(users);

// } catch (error) {
    
//    return res.sendStatus(500).json({Error:error.message});

// }

// });

// router.post("", async (req,res) => {

//     try {
        
//         const users= await User.create(req.body);
//         return res.status(200).send(users);
    
//     } catch (error) {
        
//        return res.sendStatus(500).json({Error:error.message});
    
//     }
    
//     });




module.exports=router;
