const jwt = require('jsonwebtoken');
const cookieConfig = require('../config/cookie.config');

function verifyJWT(req, res, next) {
    const token = req.headers['access-token'];

    jwt.verify(token, cookieConfig.secret, (err, decoded) => {
        if(err) {
            return res.status(401).end();
        }
        req.userId = decoded.userId;
        next();
    })
}

module.exports = verifyJWT;