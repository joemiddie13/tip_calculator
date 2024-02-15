import React, { useState } from 'react'

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [totalTip, setTotalTip] = useState(0);

  const calculateTip = () => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    setTotalTip(tipAmount)
  };

  return (
    <div>
      <h1>Tip Calculator!</h1>
      <input
        type="number"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
        placeholder="Bill Amount"
      />
      <input
        type="number"
        value={tipPercentage}
        onChange={(e) => setTipPercentage(e.target.value)}
        placeholder="Tip Percentage"
      />
      <button onClick={calculateTip}>Calculate</button>
      <div>
        <p>Tip Amount: {totalTip.toFixed(2)}</p>
        <p>Total Amount: {(parseFloat(billAmount) + totalTip).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default TipCalculator;
