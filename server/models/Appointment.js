const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const appointmentSchema = new Schema({
    appointmentDate: {
        type: Date,
        required: true,
        get: (timestamp) => dateFormat(timestamp),
    },
    appointmentTime: {
        type: String,
        required: true,
    },
    appointmentUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    });

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;