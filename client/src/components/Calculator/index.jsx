import { useState } from 'react';

const Calculator = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [biweeklyPayment, setBiweeklyPayment] = useState(0);

    const interestRate = 0.05;
    const price = 20000;
    const deposit = 5000;
    const tradeIn = 2000;
    const loanTerm = 12;

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
            <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
            <button onClick={calculateBiweeklyPayment}>Calculate Biweekly Payment</button>
            <p>Monthly Payment: {monthlyPayment}</p>
            <p>Biweekly Payment: {biweeklyPayment}</p>
        </div>
    );
};

export default Calculator;