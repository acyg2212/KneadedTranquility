const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { expiresIn } = require('../../config').jwtConfig;
const { getUserToken } = require('../../auth');
const cors = require("cors");
const { User } = require('../../db/models');
const { userCreatorValidators, userLoginValidators } = require('../../auth');
const { validationResult } = require('express-validator');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
}));

router.post("/", cors(), userLoginValidators, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const validatorErrors = validationResult(req)
    if (!validatorErrors.isEmpty()) {
        const errors = validatorErrors.array().map((error) => error.msg);
        console.log(errors)
        return res.status(422).json({ errors })
    }
    const user = await User.findOne({
        where: { email }
    });

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error('Invalid username/password combination');
        err.status = 401;
        err.title = "Unauthorized";
        throw err;
    } else {
        await user.save();
        const token = getUserToken(user);
        console.log("Token:", token);
        res.cookie('token', token, { maxAge: expiresIn * 1000 });
        res.json({ id: user.id, token, firstName: user.firstName });
    }
}))

router.post("/register", cors(), userCreatorValidators, asyncHandler(async (req, res, next) => {
    console.log(req.body)
    const {
        email,
        password,
        firstName,
        lastName,
        confirmPassword,
        phoneNumber
    } = req.body;

    const hashedPassword = bcrypt.hashSync(password);

    const user = User.build({
        firstName,
        lastName,
        email,
        phoneNumber,
        hashedPassword

    })

    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        await user.save();
        const token = getUserToken(user);
        console.log("Token:", token);
        res.cookie('token', token, { maxAge: expiresIn * 1000 });
        console.log(user)
        res.json({ id: user.id, token, firstName: user.firstName });
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        console.log(errors)
        return res.status(422).json({ errors })
    }

}))

module.exports = router;
