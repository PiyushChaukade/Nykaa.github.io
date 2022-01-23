const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: {type:String ,required:true},
    address: {type:String ,required:true},
    country: {type:String ,required:true},
    phone: {type:Number ,required:true},
    pincode: {type:String ,required:true}
})

module.exports = mongoose.model("address", addressSchema);