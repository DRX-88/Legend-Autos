import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_CAR } from '../utils/queries';
// , ADD_APPOINTMENT

const ShowCar = () => {
  const { _id } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    variables: { id: _id },
  });

  // const filenamePath = './src/assets/images/';

  console.log(data);
  const car = data?.car || {};
  console.log(car);

  // const filenamePath = '../assets/images/';
  // console.log(filenamePath + car.filename);
  console.log(car.filename);

  if (loading) {
    return <div>Loading...</div>;
  }

  const imgSize = {
    width: '250px',
    borderRadius: '5px',
    ObjectFit: 'cover',
  };



  const calculateMonthlyPayment = () => {
    // Get the input values
    const price = parseFloat(document.getElementById('price').value);
    const tradeIn = parseFloat(document.getElementById('tradeIn').value);
    const deposit = parseFloat(document.getElementById('deposit').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // Calculate the loan amount
    const loanAmount = price - tradeIn - deposit;

    // Calculate the monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate the number of monthly payments
    const numberOfPayments = loanTerm * 12;

    // Calculate the monthly payment
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPayment.toFixed(2);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const monthlyPayment = calculateMonthlyPayment();
    const biweeklyPayment = calculateBiweeklyPayment();
    document.getElementById('monthlyPayment').textContent = monthlyPayment;
    document.getElementById('biweeklyPayment').textContent = biweeklyPayment;
    console.log('Monthly Payment:', monthlyPayment);
    console.log('Biweekly Payment:', biweeklyPayment);
    // Add your logic here to handle the form submission
  };

  // ...
  const calculateBiweeklyPayment = () => {
    // Get the input values
    const price = parseFloat(document.getElementById('price').value);
    const tradeIn = parseFloat(document.getElementById('tradeIn').value);
    const deposit = parseFloat(document.getElementById('deposit').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // Calculate the loan amount
    const loanAmount = price - tradeIn - deposit;

    // Calculate the biweekly interest rate
    const biweeklyInterestRate = interestRate / 100 / 26;

    // Calculate the number of biweekly payments
    const numberOfPayments = loanTerm * 26;

    // Calculate the biweekly payment
    const biweeklyPayment = (loanAmount * biweeklyInterestRate) / (1 - Math.pow(1 + biweeklyInterestRate, -numberOfPayments));

    return biweeklyPayment.toFixed(2);
  };

  const handleAppointmentFormSubmit = (event) => {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    // const [addAppointment] = useMutation(ADD_APPOINTMENT, {
    //   variables: {
    //     date,
    //     time,
    //     name,
    //   },
    //   onCompleted: (data) => {
    //     console.log('Appointment added:', data);
    //     // Add any additional logic here after the appointment is added
    //   },
    //   onError: (error) => {
    //     console.error('Error adding appointment:', error);
    //     // Add any error handling logic here
    //   },
    // });

    addAppointment();
  };

  // ...

  <form onSubmit={handleAppointmentFormSubmit}>
    {/* Form fields */}
    <button type="submit">Add Appointment</button>
  </form>

  return (
    <div>
      <div>
        <h3>{car.make} {car.model} {car.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
        <div>
          <img src={car.filename} alt={car.make} style={imgSize} />
        </div>
        <div>
          <p>Year: {car.year}</p>
          <p>Colour: {car.colour}</p>
          <p>Fuel Type: {car.fuel}</p>
          <p>Horsepower: {car.horsepower}</p>
          <p>Engine: {car.engine}</p>
          <p>VIN: {car.vin}</p>
        </div>
        <div>
          <h2>Calculate Monthly Payments</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" />
            </div>
            <div>
              <label htmlFor="tradeIn">Trade-In Value:</label>
              <input type="number" id="tradeIn" />
            </div>
            <div>
              <label htmlFor="deposit">Deposit:</label>
              <input type="number" id="deposit" />
            </div>
            <div>
              <label htmlFor="interestRate">Interest Rate:</label>
              <input type="number" id="interestRate" />
            </div>
            <div>
              <label htmlFor="loanTerm">Loan Term (in years):</label>
              <input type="number" id="loanTerm" />
            </div>
            <button type="submit">
      Calculate
    </button>
          </form>
          <div>
            <h3>Monthly Payment:</h3>
            <p id="monthlyPayment"></p>
            <h3>Bi-Weekly Payment:</h3>
            <p id="biweeklyPayment"></p>
        </div>
        <div>
        <form>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <button type="submit">Add Appointment</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  );
};


export default ShowCar;