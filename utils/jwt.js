const jwt = require('jsonwebtoken');

const jwtGenerator = (payload) => {
    try{
        return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"24h"});
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    jwtGenerator
}