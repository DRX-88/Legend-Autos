const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    horsepower: {
        type: Number,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true
    }
});

const Car = model('Car', carSchema);

module.exports = Car;