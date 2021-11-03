const cars = [
    {
        vin: '1JCMR7841JT185472',
        make: 'Jeep',
        model: 'Cherokee',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'JH4CC2660RC002031',
        make: 'Acura',
        model: 'Vigor',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'TRUSC28N341016582',
        make: 'Audi',
        model: 'TT',
        mileage: 892230,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'WP1AC29P65LA91996',
        make: 'Porche',
        model: 'Cayenne',
        mileage: 892230,
        transmission: 'automatic'
    },
    {
        vin: 'JYAVP18E07A005321',
        make: 'Yamaha',
        model: 'FakeCR-A',
        mileage: 892230,
        title: 'salvage'
    },
]

exports.seed = async function (knex) {
    await knex('cars') .truncate()
    await knex('cars').insert(cars)
}
