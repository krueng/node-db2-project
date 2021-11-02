const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    // try {
    //     const car = await Car.getById(req.params.id)
        res.json(req.car)
    // } catch (error) {
    //     next(error)
    // }
})

router.post('/', async (req, res, next) => {
    res.json('Posting new car')
})

module.exports = router
