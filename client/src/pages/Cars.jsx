import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_CARS } from '../utils/queries';

function Cars() {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];
  
  console.log(filename);
  cars.map((car) => (
   
  console.log(car.filename)
  
  const filename = `./assets/images/${car.filename}` 
  ));
  
  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car) => (
        <div key={car._id}>
          <h3>{car.make} {car.model}</h3>
          <ul>
            <li>
              <p>Year: {car.year}</p>
              <p>Colour: {car.colour}</p>
              <p>Price: {car.price}</p>
              <p>Fuel Type: {car.fuel}</p>
              <p>{car.horsepower}</p>
              <p>{car.engine}</p>
              <p>{car.vin}</p>
            </li>
          </ul>
          <img src="./assets/images/{car.filename}" alt={car.model} />
        </div>
      ))}
    </div>
    
  );
  
}


export default Cars;
