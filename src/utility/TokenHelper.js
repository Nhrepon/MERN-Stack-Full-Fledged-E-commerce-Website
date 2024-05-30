const jwt=require('jsonwebtoken');

exports.encodeToken=(email, userId)=>{
    const payload={email:email, userId:userId};
    const key=process.env.TOKEN_KEY;
    const expireTime={expiresIn:'7d'};
    return jwt.sign(payload, key, expireTime);
}



exports.decodeToken=(token)=>{
    try {
        const key=process.env.TOKEN_KEY;
        return jwt.verify(token, key);
    } catch (error) {
        return error;
    }
}