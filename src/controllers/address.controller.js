const express= require('express');
const router = express.Router();

const Address= require("../models/address.model");

router.get('/', async (req, res) => {
    try{
         res.render('Address')
        } catch (err) { 
            console.log(err.message);
        }
})
// router.post('/post', async (req, res) => {
//     try{
//          const address= await Address.create(req.body)
    
//          res.render('Address')
//         } catch (err) { 
//             console.log(err.message);
//         }
// })

// const post = (model) => async(req,res) => {
//     try {
//         console.log("req",req.body);
//         const item = await model.create(req.body);

//         return res.status(200).send(item);
//     } catch (err) {
//         returres.status(500).send(err.message);
//     }
// }

// const getAll = (model, page) => async (req,res) => {
//     try {
//         const items = await model.find().lean().exec();

//         // return res.status(200).send(items);
//         return res.render(page);
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }


// module.exports = (model , page = null) => ({
//     get: getAll(model, page),
//     post: post(model)
// })
module.exports = router;