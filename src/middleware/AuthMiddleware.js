
const { decodeToken } = require('../utility/TokenHelper');

const AuthMiddleware=(req, res, next)=>{
    
    try {
        const token=req.cookies.token;
        //const token=req.headers.token;

        const decode=decodeToken(token);
        if(!decode){
            return res.status(401).json({status:"Failed", message:"Invalid Token"});
        }else{
            req.headers.email=decode.email;
            req.headers.userId=decode.userId;
            next();
        }
        
    } catch (error) {
        res.status(400).json({message:error});
    }    
}

module.exports=AuthMiddleware;