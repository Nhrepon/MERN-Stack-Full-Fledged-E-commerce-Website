const jwt=require('jsonwebtoken');

exports.encodeToken=(email)=>{
    const payload={email:email};
    const key=process.env.TOKEN_KEY;
    const expireTime={expiresIn:'1d'};
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