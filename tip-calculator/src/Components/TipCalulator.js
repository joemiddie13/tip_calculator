import React from 'react';

function TipCalculator({ billAmount, tipPercentage, partyNumber }) {
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalBill = parseFloat(billAmount) + tipAmount;
  const costPerPerson = totalBill / partyNumber;

  return (
    <div>
      <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
      <p>Total Bill: ${totalBill.toFixed(2)}</p>
      <p>Cost per Person: ${costPerPerson.toFixed(2)}</p>
    </div>
  );
}

export default TipCalculator;
