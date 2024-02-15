import React, { useState } from 'react';
import BillAmount from './Components/BillAmount';
import PartyNumber from './Components/PartyNumber';
import TipAmount from './Components/TipAmount';
import TipCalculator from './Components/TipCalulator';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [partyNumber, setPartyNumber] = useState(1);
  const [tipPercentage, setTipPercentage] = useState('');

  return (
    <div>
      <h1>Tip Calculator!</h1>
      <BillAmount billAmount={billAmount} setBillAmount={setBillAmount} />
      <PartyNumber partyNumber={partyNumber} setPartyNumber={setPartyNumber} />
      <TipAmount tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
      <TipCalculator />
    </div>
  );
}

export default App;
