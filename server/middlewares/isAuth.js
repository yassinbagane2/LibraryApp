const jwt = require('jsonwebtoken');
 
module.exports = async (req, res, next) => {
    if(!req.headers.authorization) return res.sendStatus(401).json('Not Authenticated.');
    console.log(req.headers.authorization)
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
            (err,decoded) => {
                if (err) return res.sendStatus(403).json('Token Is Not Valid.');
                req.user = decoded.userId
                next();
            });
    } catch (err) {
        console.log(err);
        next(err);
    }
}