const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    employee: {
        type: Boolean,
        default: false
    },
    liked: [
        {
            type: Schema.Types.ObjectId,
            ref: 'LikedCars'
        }
    ],
});

const User = model('User', userSchema);

module.exports = User;