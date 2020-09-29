const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { expiresIn } = require('../../config').jwtConfig;
const { getUserToken } = require('../../auth');
const cors = require("cors");
const { User } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
}));

router.post("/", cors(), asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: { email }
    });

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error('Invalid username/password combination');
        err.status = 401;
        err.title = "Unauthorized";
        throw err;
    }
    const token = getUserToken(user);
    console.log("Token:", token);
    res.cookie('token', token, { maxAge: expiresIn * 1000 });
    res.json({ id: user.id, token });

}))

module.exports = router;
