const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

exports.handleRefreshToken = async (req, res, next) => {

    if (req.cookies?.jwt) {
        const refreshToken = req.cookies.jwt;
        const foundUser = await User.findOne({refreshToken: refreshToken});
        if (!foundUser) {
            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                async (err,decoded) => {
                    if (err) return res.sendStatus(403).json('invalid token');
                    const hackedUser = await User.findOne({_id: decoded.userId});
                    hackedUser.refreshToken = [];
                    const result = await hackedUser.save();
                    console.log('hackedUser:',result);
                }
            )
            return res.sendStatus(403); //Forbidden
        }

        const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken);

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err,decoded) => {
                if (err) {
                    console.log('from refresh token:',decoded)
                    foundUser.refreshToken = [...newRefreshTokenArray];
                    foundUser.save();
                    res.status(406).json({ message: 'Unauthorized' })
                }
                
                const accessToken = jwt.sign({
                    userId: foundUser._id
                },process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'10min'});

                const newRefreshToken=jwt.sign(
                    {userId:foundUser._id},
                    process.env.REFRESH_TOKEN_SECRET);

                // Saving refreshToken with current user
                foundUser.refreshToken= [...newRefreshTokenArray, newRefreshToken];
                const result = await foundUser.save();
                res.cookie('jwt', newRefreshToken,{ httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

                console.log(result)
                
                return res.json(accessToken);
            }
        );
    } else {
        return res.status(406).json({ message: 'Unauthorized Token.' });
    }
      
}