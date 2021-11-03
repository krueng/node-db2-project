const Car = require('./cars-model')
const vinCheck = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if (!car) {
      next({
        status: 404,
        message: 'not found'
      })
    } else {
      req.car = car
      next()
    }
  } catch (error) {
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.make) return next({
    status: 400,
    message: 'make is missing',
  })

  if (!req.body.mileage) return next({
    status: 400,
    message: 'mileage is missing',
  })

  if (!req.body.model) return next({
    status: 400,
    message: 'model is missing',
  })

  if (!req.body.vin) return next({
    status: 400,
    message: 'vin is missing',
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body
  if (vinCheck.validate(vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${vin} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const { vin } = req.body
    const vinExist = await Car.getByVin(vin)
    if (!vinExist) {
      next()
    } else {
      next({
        status: 400,
        message: `vin ${vin} already exists`
      })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}