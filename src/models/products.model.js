const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(

{
        item:{type:Number ,required:true},   //item:1,

        trend:{type:String ,required:true},  //   trend:"FEATURED",

        product_name:{type:String ,required:true},   //   product_name:"Beardo Hair Growth Oil",

        MRPcut:{type:String ,required:true},  //   MRPcut:"₹750",

        MRPcut1:{type:Number ,required:true},         //   MRPcut1:750,

        MRP:{type:String ,required:true},   //   MRP:"₹585",

        MRPsort:{type:Number ,required:true},//   MRPsort:585,

        totaldiscount:{type:Number ,required:true},//   totaldiscount:165,

        discount:{type:String ,required:true},       //   discount:"22% Off",
        
        discountsort:{type:Number ,required:true},     //   discountsort:22,

        total:{type:String ,required:true},     //   total:"(400)",

        image_urls:{type:String ,required:true},//   image_urls:"img/star4.png",

        rating:{type:Number ,required:true},   //   rating:4,

        name:{type:Number ,required:true},   //   name:1,

        image_urlheart:{type:String,required:true},  //   image_urlheart:"img/heart.png",

        image_url:{type:String ,required:true},    //   image_url

},
{
    versionKey:false,
    timestamps:true,
}

);

module.exports = mongoose.model("product",productSchema);