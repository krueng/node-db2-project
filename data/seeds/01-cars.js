const cars = [
    {
        vin: '86529635656235623',
        make: 'Honda',
        model: 'CR-V',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '86529635656235624',
        make: 'Ferrari',
        model: 'CR-x',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '86529635656235625',
        make: 'Merc',
        model: 'CR-y',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '86529635656235626',
        make: 'Lambo',
        model: 'CR-z',
        mileage: 892230,
        transmission: 'automatic'
    },
    {
        vin: '86529635656235627',
        make: 'Bentley',
        model: 'FakeCR-A',
        mileage: 892230,
        title: 'salvage'
    },
]

exports.seed = async function (knex) {
    await knex('cars') .truncate()
    await knex('cars').insert(cars)
}
