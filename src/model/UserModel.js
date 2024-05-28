const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    otp:{type:String}
},{timestamp:true, versionKey:false});

const UserModel=mongoose.model('Users', databaseSchema);

module.exports=UserModel;