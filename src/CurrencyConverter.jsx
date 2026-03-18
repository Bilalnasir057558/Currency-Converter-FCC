import React from "react";
const { useState, useMemo } = React;

export default function CurrencyConverter() {

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const currencies = Object.keys(rates);

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);

  const convertedRates = useMemo(() => {
    const results = {};
    currencies.forEach(curr => {
      results[curr] = ((amount * rates[curr]) / rates[from]).toFixed(2);
    })

    return results;
  }, [amount, from])

  return (
    <div className="container">

      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        min="1"
        onChange={e => setAmount(Number(e.target.value))}
      />

      <div className="select-group">

        <label>
          From
          <select
            value={from}
            onChange={e => setFrom(e.target.value)}
          >
            {currencies.map(curr => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>

        <label>
          To
          <select
            value={to}
            onChange={e => setTo(e.target.value)}
          >
            {currencies.map(curr => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>

      </div>

      <p className="result">
        {convertedRates[to]} {to}
      </p>

    </div>
  );
}
