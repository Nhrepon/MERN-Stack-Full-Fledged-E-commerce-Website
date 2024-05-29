const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    title:{type:String, require:true},
    des:{type:String},
    price:{type:Number},
    imgage:{type:String}
}, {timestamp:true, versionKey:false});

const ProductSliderModel=mongoose.model("productsliders", databaseSchema);

module.exports=ProductSliderModel;