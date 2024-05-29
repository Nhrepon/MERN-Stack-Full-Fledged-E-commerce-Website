const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    brandName:{type:String, require:true, unique:true},
    brandImg:{type:String}
}, {timestamp:true, versionKey:false});

const BrandModel=mongoose.model("brands", databaseSchema);

module.exports=BrandModel;