import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String) {
        user(username: $username) {
            _id
            username
            email
            employee
            liked {
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
                filename
            }
        }
    }
`;

export const QUERY_CARS = gql`
query Car {
    cars {
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
      filename
    }
  }
`;

export const QUERY_SINGLE_CAR = gql`
query Car($id: ID!) {
    car(_id: $id) {
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
      filename
    }
  }
`;

export const QUERY_APPOINTMENTS = gql`
    query appointments {
        appointments {
            _id
            appointmentDate
            appointmentTime
            appointmentUser {
                _id
            }
        }
    }
`;

export const QUERY_LIKED_CARS = gql`
    query likedCars {
        likedCars {
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