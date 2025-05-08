import React, { useState, useEffect } from 'react';

function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data)));
  }, []);

  const convert = () => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data[from][to];
        setResult((amount * rate).toFixed(2));
      });
  };

  return (
    <section className="converter">
      <h3>Конвертируйте</h3>

      <label htmlFor="from">Из валюты:</label>
      <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((code) => (
          <option key={code} value={code}>{code.toUpperCase()}</option>
        ))}
      </select>

      <label htmlFor="to">В валюту:</label>
      <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((code) => (
          <option key={code} value={code}>{code.toUpperCase()}</option>
        ))}
      </select>

      <label htmlFor="amount">Сумма:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={convert}>Конвертировать</button>

      <h2 id="result">{result ? `Результат: ${result}` : 'Результат появится здесь'}</h2>
    </section>
  );
}

export default Converter;
