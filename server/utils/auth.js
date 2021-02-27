const jwt = require("jsonwebtoken");

exports.createJWT = (email,id,duration) => {

    const payload = {
        email,id,duration
    };

    return jwt.sign(payload,process.env.TOKEN_SECRET,{
        expiresIn:duration
    });
}