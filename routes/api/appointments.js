const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const cors = require("cors");
const { ServiceType, Service, Employee } = require("../../db/models")
const { Op } = require("sequelize");


router.get("/", cors(), asyncHandler(async (req, res, next) => {
    const serviceTypes = await ServiceType.findAll();
    res.json({ serviceTypes })
}));

router.get("/:id", cors(), asyncHandler(async (req, res, next) => {
    const services = await Service.findAll({
        where: {
            serviceTypeId: {
                [Op.eq]: req.params.id
            }
        },
    })
    res.json({ services })
}))

router.get("/employee/:id", cors(), asyncHandler(async (req, res, next) => {
    console.log('here')
    const employees = await Employee.findAll({
        where: {
            serviceTypeId: {
                [Op.eq]: req.params.id
            }
        },
    })
    console.log(employees)
    res.json({ employees })
}))

module.exports = router;