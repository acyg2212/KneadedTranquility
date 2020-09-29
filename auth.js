const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;

const { User } = require('./db/models');

const getUserToken = (user) => {
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn })
    console.log(token)
    return token;
}

const getUserFromToken = async (token) => {
    try {
        const payload = jwt.verify(
            token,
            secret
        );
        return await User.findByPk(payload.id);
    } catch (err) {
        return null;
    }
}


module.exports = {
    getUserToken,
    getUserFromToken
};