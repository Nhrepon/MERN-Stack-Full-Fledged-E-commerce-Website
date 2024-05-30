const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    productId:{type: mongoose.Schema.Types.ObjectId, require:true},
    userId:{type: mongoose.Schema.Types.ObjectId, require:true},
    color:{type:String},
    qty:{type:String},
    size:{type:String},

}, { timestamp: true, versionKey: false });

const CartModel=mongoose.model("carts", databaseSchema);

module.exports=CartModel;