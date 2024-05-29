const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    categoryName:{type:String, require:true, unique:true},
    categoryImg:{type:String}
}, {timestamp:true, versionKey:false}); 

const CategoryModel=mongoose.model("categories", databaseSchema);

module.exports=CategoryModel;