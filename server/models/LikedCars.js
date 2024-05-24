const { Schema, model } = require('mongoose');

const likedCarsSchema = new Schema({
    likedUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likedCar: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
    },
});

const LikedCars = model('LikedCars', likedCarsSchema);

module.exports = LikedCars;