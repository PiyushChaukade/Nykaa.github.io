const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    
product_id: [{type: mongoose.Schema.Types.ObjectId , ref: 'product', required: false, default: null}],

},
{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('cart', cartSchema);