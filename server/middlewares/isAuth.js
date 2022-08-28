const jwt = require('jsonwebtoken');
 
module.exports = async (req, res, next) => {
    if(!req.headers.authorization) return res.sendStatus(401).json('Not Authenticated.');
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
            (err,decoded) => {
                if (err) return res.status(403).json('Token Is Not Valid.');
                req.userId = decoded.userId;
                next();
            });
    } catch (err) {
        next(err);
    }
}