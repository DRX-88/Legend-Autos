import { useState } from 'react';


const Calculator = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [biweeklyPayment, setBiweeklyPayment] = useState(0);

    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const price = parseFloat(event.target.price.value);
        const deposit = parseFloat(event.target.deposit.value);
        const tradeIn = parseFloat(event.target.tradeIn.value);
        const loanTerm = parseFloat(event.target.loanTerm.value);
        const interestRate = parseFloat(event.target.interestRate.value); 
        
        calculateMonthlyPayment(price, deposit, tradeIn, loanTerm, interestRate);
        calculateBiweeklyPayment(price, deposit, tradeIn, loanTerm, interestRate);
    };

    const calculateMonthlyPayment = () => {
        const amountFinanced = price - tradeIn - deposit;
        const monthlyInterestRate = interestRate / 12;
        const payment = amountFinanced * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
        setMonthlyPayment(payment);
    };

    const calculateBiweeklyPayment = () => {
        const amountFinanced = price - tradeIn - deposit;
        const biweeklyInterestRate = interestRate / 26;
        const payment = amountFinanced * biweeklyInterestRate / (1 - Math.pow(1 + biweeklyInterestRate, -loanTerm * 2));
        setBiweeklyPayment(payment);
    };

    return (
        <div>
            <h2>Payment Calculator</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" required />
                <label htmlFor="deposit">Deposit</label>
                <input type="number" id="deposit" name="deposit" required />
                <label htmlFor="tradeIn">Trade In</label>
                <input type="number" id="tradeIn" name="tradeIn" required />
                <label htmlFor="loanTerm">Loan Term</label>
                <input type="number" id="loanTerm" name="loanTerm" required />
                <label htmlFor="interestRate">Interest Rate</label>
                <input type="number" id="interestRate" name="interestRate" required />
                <button type="submit">Calculate</button>
            </form>
            <p>Monthly Payment: {monthlyPayment}</p>
            <p>Biweekly Payment: {biweeklyPayment}</p>
        </div>
    );
}

export default Calculator;