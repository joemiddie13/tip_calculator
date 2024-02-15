import React from 'react';

function BillAmount({ billAmount, setBillAmount }) {
  return (
    <div>
      <label htmlFor="billAmount">Bill Amount ($):</label>
      <input
        id="billAmount"
        type="number"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
        placeholder="Enter Bill Amount"
      />
    </div>
  );
}

export default BillAmount;
