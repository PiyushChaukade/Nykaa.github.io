const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    
product_id: {type: mongoose.Schema.Types.ObjectId , ref: 'product', required: false, default: null},
// product_name:{type: String, required :true}
// price: {type: Number, required :true},

},
{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('cart', cartSchema);