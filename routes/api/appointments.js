const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const cors = require("cors");
const { ServiceType, Service, Employee, Appointments, Time, User } = require("../../db/models")
const { Op } = require("sequelize");


router.get("/", cors(), asyncHandler(async (req, res, next) => {
    const serviceTypes = await ServiceType.findAll();
    res.json({ serviceTypes })
}));

router.put("/my-appointments", cors(), asyncHandler(async (req, res, next) => {
    const { userId } = req.body;
    console.log(userId)
    const appointments = await Appointments.findAll({
        where: {
            userId: userId
        },
        include: [Time, Employee, Service]

    });
    console.log(appointments)
    res.json({ appointments })
}));

router.post("/", cors(), asyncHandler(async (req, res, next) => {
    const {
        employeeId,
        serviceId,
        timeId,
        startDate,
        userId,
    } = req.body;
    let stringStartDate = startDate.toString()
    let startDateArray = stringStartDate.split('T')

    console.log(startDateArray)
    console.log(userId)
    const appointment = await Appointments.create({
        date: startDateArray[0],
        employeeId,
        userId,
        serviceId,
        startTimeId: timeId,
        endTimeId: timeId
    })
    console.log(appointment)

    res.json({ id: appointment.id })
}))

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
    res.json({ employees })
}))

router.post("/date", cors(), asyncHandler(async (req, res, next) => {
    let { startDate } = req.body;
    let { employeeId } = req.body.props.props
    let stringStartDate = startDate.toString()
    let startDateArray = stringStartDate.split('T')

    let appointments = await Appointments.findAll({
        where: {
            date: startDateArray[0],
            employeeId: employeeId
        }
    })
    let appointmentTimes = appointments.map(appointment => {
        return appointment.startTimeId
    })

    console.log(appointmentTimes)
    let availableTimes = await Time.findAll({
        where: {
            id: {
                [Op.notIn]: appointmentTimes
            }
        }
    })


    res.json({ availableTimes });
}))

module.exports = router;