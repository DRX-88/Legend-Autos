import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_CAR } from '../utils/queries';

const showCar = () => {
  const { carId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    variables: { carId: carId },
  });

  const car = data?.car || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{car.make} {car.model}</h1>
      <h2>{car.year}</h2>
      <h2>{car.colour}</h2>
      <h2>{car.price}</h2>
      <h2>{car.fuel}</h2>
      <h2>{car.horsepower}</h2>
      <h2>{car.engine}</h2>
      <h2>{car.vin}</h2>
      <h2>{car.filename}</h2>
    </div>
  );
}

export default showCar;