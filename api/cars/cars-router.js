const express = require('express')
const Car = require('./cars-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
})
router.get('/:id', async (req, res, next) => {
    res.json(`Getting cars with id ${req.params.id}`)
})
router.post('/', async (req, res, next) => {
    res.json('Posting new car')
})

module.exports = router
