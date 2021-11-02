exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 19).unique().notNullable()
    table.string('make', 55).notNullable()
    table.string('model', 57).notNullable()
    table.integer('mileage', 55).notNullable().unsigned()
    table.string('title', 55)
    table.string('transmission', 55)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
