import React, { useState } from 'react';

const RandomValue = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [randomValue, setRandomValue] = useState('');

  const handleMinChange = (event) => {
    setMinValue(Number(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxValue(Number(event.target.value));
  };

  const generateRandomValue = () => {
    const randomVal = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    setRandomValue(randomVal);
  };

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <div>
        <label htmlFor="minValue">Valor Mínimo:</label>
        <input type="number" id="minValue" value={minValue} onChange={handleMinChange} />
      </div>
      <div>
        <label htmlFor="maxValue">Valor Máximo:</label>
        <input type="number" id="maxValue" value={maxValue} onChange={handleMaxChange} />
      </div>
      <div>
        <button onClick={generateRandomValue}>Gerar Valor Aleatório</button>
      </div>
      {randomValue !== '' && (
        <div>
          <p>Valor Escolhido: {randomValue}</p>
        </div>
      )}
    </div>
  );
};

export default RandomValue;
