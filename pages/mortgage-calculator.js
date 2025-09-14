import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Calculator.module.css';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [firstMonth, setFirstMonth] = useState({ principal: 0, interest: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    const calculatePayment = () => {
      const principal = homePrice - downPayment;
      const annualRate = interestRate;
      const termYears = loanTerm;

      if (principal <= 0 || annualRate <= 0 || termYears <= 0) {
        setError('Please enter positive values for all fields.');
        setMonthlyPayment(0);
        setFirstMonth({ principal: 0, interest: 0 });
        return;
      }
      setError('');

      const r = annualRate / 12 / 100;
      const n = termYears * 12;
      
      if (r === 0) { // Handle zero interest rate case
          const payment = principal / n;
          setMonthlyPayment(payment);
          setFirstMonth({ principal: payment, interest: 0 });
          return;
      }

      const payment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const firstMonthInterest = principal * r;
      const firstMonthPrincipal = payment - firstMonthInterest;

      setMonthlyPayment(payment);
      setFirstMonth({ principal: firstMonthPrincipal, interest: firstMonthInterest });
    };

    calculatePayment();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === '' || parseFloat(value) >= 0) {
        setter(parseFloat(value) || 0);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mortgage Calculator - BetterClone</title>
        <meta name="description" content="Calculate your monthly mortgage payment." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mortgage Calculator</h1>
        <div className={styles.calculatorWrapper}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="homePrice">Home Price</label>
                    <input type="number" id="homePrice" value={homePrice} onChange={handleInputChange(setHomePrice)} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="downPayment">Down Payment</label>
                    <input type="number" id="downPayment" value={downPayment} onChange={handleInputChange(setDownPayment)} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="interestRate">Interest Rate (%)</label>
                    <input type="number" id="interestRate" step="0.01" value={interestRate} onChange={handleInputChange(setInterestRate)} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="loanTerm">Loan Term (years)</label>
                    <select id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(parseInt(e.target.value))}>
                        <option value="15">15</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </form>

            <div className={styles.results}>
                <h2>Your Results</h2>
                {error ? (
                    <p className={styles.error}>{error}</p>
                ) : (
                    <>
                        <div className={styles.resultItem}>
                            <span>Principal Loan Amount</span>
                            <strong>${(homePrice - downPayment).toLocaleString()}</strong>
                        </div>
                        <div className={styles.resultItem}>
                            <span>Monthly Payment</span>
                            <strong className={styles.monthlyPayment}>${monthlyPayment.toFixed(2)}</strong>
                        </div>
                        <div className={styles.breakdown}>
                            <p>First Month's Payment Breakdown:</p>
                            <span>Principal: ${firstMonth.principal.toFixed(2)}</span>
                            <span>Interest: ${firstMonth.interest.toFixed(2)}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
      </main>
    </div>
  );
}
