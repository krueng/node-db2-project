const express = require('express')

const router = express.Router()

router.get ('/', async (req, res, next) => {
    res.json('Getting all cars')
})
router.get ('/:id', async (req, res, next) => {
    res.json(`Getting cars with id ${req.params.id}` )
})
router.post ('/', async (req, res, next) => {
    res.json('Posting new car')
})

module.exports = router
