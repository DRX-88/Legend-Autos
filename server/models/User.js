const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;