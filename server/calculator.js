let interestRate = 0.05;
let price = 20000;
let deposit = 5000;
let tradeIn = 2000;
let loanTerm = 12;
let monthlyPayment = 0;
let biweeklyPayment = 0;

function calculateMonthlyPayment() {
    let amountFinanced = price - tradeIn - deposit;
    let monthlyInterestRate = interestRate / 12;
    monthlyPayment = amountFinanced * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    return monthlyPayment;
}
console.log(calculateMonthlyPayment());

function calculateBiweeklyPayment() {
    let amountFinanced = price - tradeIn - deposit;
    let biweeklyInterestRate = interestRate / 26;
    biweeklyPayment = amountFinanced * biweeklyInterestRate / (1 - Math.pow(1 + biweeklyInterestRate, -loanTerm * 2));
    return biweeklyPayment;
}
console.log(calculateBiweeklyPayment());