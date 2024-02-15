import React from 'react';

function TipAmount({ tipPercentage, setTipPercentage }) {
  return (
    <div>
      <label htmlFor="tipPercentage">Tip Percentage (%):</label>
      <input
        id="tipPercentage"
        type="number"
        value={tipPercentage}
        onChange={(e) => setTipPercentage(e.target.value)}
        placeholder="Enter Tip Percentage"
      />
    </div>
  );
}

export default TipAmount;
