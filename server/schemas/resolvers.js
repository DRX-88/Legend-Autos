const User  = require('../models/User');
const Car = require('../models/Cars');
const Appointment  = require('../models/Appointment');
const LikedCars  = require('../models/LikedCars');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query : {
        users: async () => {
            return User.find().populate('LikedCars');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('LikedCars');
        },
        cars: async () => {
            return Car.find();
        },
        car: async (parent, { _id }) => {
            return Car.findById({ _id });
        },
        likedCars: async () => {
            return LikedCars.find();
        },
        appointments: async () => {
            return Appointment.find();
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addCar: async (parent, args) => {
            return Car.create(args);
        },
        addLikedCars: async (parent, args) => {
            return LikedCars.create(args);
        },
        addAppointment: async (parent, args) => {
            return Appointment.create(args);
        },
    },
};
module.exports = resolvers