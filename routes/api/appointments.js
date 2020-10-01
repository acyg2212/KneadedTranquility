const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const cors = require("cors");
const { ServiceType } = require("../../db/models")


router.get("/", cors(), asyncHandler(async (req, res, next) => {
    console.log('here')
    const serviceTypes = await ServiceType.findAll();
    res.json({ serviceTypes })
}))


module.exports = router;