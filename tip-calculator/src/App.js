import React, { useState } from 'react';
import BillAmount from './Components/BillAmount';
import PartyNumber from './Components/PartyNumber';
import TipAmount from './Components/TipAmount';
import TipCalculator from './Components/TipCalulator';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [partyNumber, setPartyNumber] = useState(1);
  const [tipPercentage, setTipPercentage] = useState('');

  return (
    <div className='App'>
      <h1>Tip Calculator!</h1>
      <div className='inputs'>
          <BillAmount billAmount={billAmount} setBillAmount={setBillAmount} />
          <PartyNumber partyNumber={partyNumber} setPartyNumber={setPartyNumber} />
          <TipAmount tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
        </div>
        <div className='TipCalculator'>
          <TipCalculator tipPercentage={tipPercentage} billAmount={billAmount} partyNumber={partyNumber}/>
        </div>
      </div>
  );
}

export default App;
