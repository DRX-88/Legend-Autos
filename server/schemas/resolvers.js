const { User } = require('./User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query : {
        users: async () => {
            return User.find().populate('LikedCars');
        },
    },
};
        // user: async (parent, { username }) => {
