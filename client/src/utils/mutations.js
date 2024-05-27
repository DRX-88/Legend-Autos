import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $employee: Boolean, $liked: [ID]) {
    addUser(username: $username, email: $email, password: $password, employee: $employee, liked: $liked) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CAR = gql`
  mutation addCar($make: String!, $model: String!, $year: Int!, $colour: String!, $price: Int!, $fuel: String!, $horsepower: Int!, $engine: String!, $vin: String!, $filename: String!) {
    addCar(make: $make, model: $model, year: $year, colour: $colour, price: $price, fuel: $fuel, horsepower: $horsepower, engine: $engine, vin: $vin, filename: $filename) {
      _id
      make
      model
      year
      colour
      price
      fuel
      horsepower
      engine
      vin
    }
  }
`;

export const ADD_LIKED_CARS = gql`
  mutation addLikedCars($likedUser: ID!, $likedCar: ID!) {
    addLikedCars(likedUser: $likedUser, likedCar: $likedCar) {
      _id
      likedUser {
        _id
      }
      likedCar {
        _id
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($appointmentDate: String!, $appointmentTime: String!, $appointmentUser: ID!) {
    addAppointment(appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, appointmentUser: $appointmentUser) {
      _id
      appointmentDate
      appointmentTime
      appointmentUser {
        _id
      }
    }
  }
`;