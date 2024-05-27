import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_CAR } from '../utils/queries';

const ShowCar = () => {
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
      <h1>{car.model}</h1>
      <p>{car.make}</p>
      <p>{car.year}</p>
      <p>{car.colour}</p>
      <p>{car.price}</p>
      <p>{car.fuel}</p>
      <p>{car.horsepower}</p>
      <p>{car.engine}</p>
      <p>{car.vin}</p>
      <img src={car.filename} alt={car.model} />
    </div>
  );
};
  
  export default ShowCar;