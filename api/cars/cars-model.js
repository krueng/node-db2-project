const db = require('../../data/db-config')
const getAll = () => {
  return db('cars')
}

const getById = () => {

}

const create = () => {

}

module.exports = {
  getAll,
  getById,
  create
}