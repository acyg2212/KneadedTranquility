const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;
const { check } = require('express-validator');

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
const userLoginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long'),
];

const userCreatorValidators = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name')
        .isLength({ max: 50 })
        .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Last Name')
        .isLength({ max: 50 })
        .withMessage('Last Name must not be more than 50 characters long'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom(value => {
            return User.findOne({ where: { email: value } }).then(user => {
                if (user) {
                    return Promise.reject('The provided Email Address is already in use by another account');
                }
            });
        }),
    check('phoneNumber')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Phone Number')
        .isNumeric()
        .withMessage("Must be numbers")
        .isLength(10)
        .withMessage('Password must be 10 digits long'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 50 })
        .withMessage('Confirm Password must not be more than 50 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }),
];


module.exports = {
    getUserToken,
    getUserFromToken,
    userCreatorValidators,
    userLoginValidators,
};