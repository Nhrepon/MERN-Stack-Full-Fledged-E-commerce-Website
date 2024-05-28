const UserModel=require('../model/UserModel');
const SendEmail = require('../utility/SendEmail');

exports.UserOTP = async (req, res)=>{
    try {
        const {email}=req.body;
        const otpCode=Math.floor(100000 + Math.random() * 900000);
        const emailText=`Your OTP code is ${otpCode}`;
        const emailSubject='Your OTP verification code';
        await SendEmail(email, emailSubject, emailText);
        const data=await UserModel.updateOne({email:email}, $set={otp:otpCode}, {upsert:true});
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}







exports.VerifyLogin = async (req, res)=>{
    try {
        const {email, otp}=req.body;
        const user=await UserModel.find({email:email, otp:otp});
        if(user.length>0){
            const token=
        }
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}







exports.UserLogout = async (req, res)=>{
    try {
        
        res.json({status:"Success", data:" "});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}




exports.CreateProfile = async (req, res)=>{
    try {
        const reqBody=req.body;
        const data=await UserModel.create(reqBody);
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}







exports.UpdateProfile = async (req, res)=>{
    try {
        const {email, otp}=req.body;
        const data=await UserModel.updateOne({email:email}, $set={otp:otp});
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}






exports.ReadProfile = async (req, res)=>{
    try {
        const {email}=req.body;
        const data=await UserModel.find({email:email});
        res.json({status:"Success", data:data});
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}






