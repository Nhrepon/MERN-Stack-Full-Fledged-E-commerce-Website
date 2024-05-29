const UserModel=require('../model/UserModel');
const SendEmail = require('../utility/SendEmail');
const { encodeToken } = require('../utility/TokenHelper');

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
            const token=encodeToken(email);
            const cookieOption={expires:new Date(Date.now()+3*24*60*60*1000), httpOnly:true}
            res.cookie('token', token, cookieOption);
            //await UserModel.updateOne({email:email, otp:otp}, $set={otp:""});
            res.json({status:"Success", data:token});
        }else{
            res.json({status:"Failed", message:"Invalid OTP"});
        }
        
    } catch (error) {
        res.json({status:"Failed", message:error});
    }
}







exports.UserLogout = async (req, res)=>{
    try {
        res.clearCookie('token');
        res.json({status:"Success", data:"Logout success"});
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






