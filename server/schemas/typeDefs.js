const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        employee: Boolean
        liked: [LikedCars]
    }
    
    type Car {
        _id: ID
        make: String
        model: String
        year: Int
        colour: String
        price: Int
        fuel: String
        horsepower: Int
        engine: String
        vin: String
    }

    type Appointment {
        _id: ID
        appointmentDate: String
        appointmentTime: String
        appointmentUser: User
    }

    type LikedCars {
        _id: ID
        likedUser: User
        likedCar: Car
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        cars: [Car]
        likedCars: [LikedCars]
        appointments: [Appointment]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCar(make: String!, model: String!, year: Int!, colour: String!, price: Int!, fuel: String!, horsepower: Int!, engine: String!, vin: String!): Car
        addLikedCars(likedUser: ID!, likedCar: ID!): LikedCars
        addAppointment(appointmentDate: String!, appointmentTime: String!, appointmentUser: ID!): Appointment
    }
`;

module.exports = { typeDefs};