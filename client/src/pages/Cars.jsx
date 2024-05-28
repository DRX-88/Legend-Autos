import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_CARS } from '../utils/queries';

function Cars() {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];

  const filenamePath = './src/assets/images/';
  

  cars.map((car) => (
    console.log(car.filename)
  ));

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    margin: '10px',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #000',

  };

  const imgDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #000',
  };

  const imgSize = {
    width: '250px',

    borderRadius: '5px',
    ObjectFit: 'cover',
  };

  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car) => (
        <div key={car._id}>
          <h3>{car.make} {car.model} {car.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
          <div style={containerStyles}>

            <div >

              <p>Year: {car.year}</p>
              <p>Colour: {car.colour}</p>
              <p>Fuel Type: {car.fuel}</p>
              <p>{car.horsepower} Horsepower</p>
              <p>Engine: {car.engine}</p>
              <p>{car.vin}</p>
            </div>
            <div style={imgDiv}>
              <img style={imgSize} src={filenamePath + car.filename} alt={car.model} />
            </div>


          </div>
        </div>
      ))}
    </div>

  );

}


export default Cars;
