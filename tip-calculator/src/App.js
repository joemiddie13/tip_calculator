import React, { useState } from 'react';
import BillAmount from './Components/BillAmount';
import PartyNumber from './Components/PartyNumber';
import TipAmount from './Components/TipAmount';
import TipCalculator from './Components/TipCalculator';
import './App.css';
import './Components/BillAmount.css'
import './Components/TipCalculator.css'

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [partyNumber, setPartyNumber] = useState(1);
  const [tipPercentage, setTipPercentage] = useState('');

  return (
    <div className='App'>
      <div className='inputs'>
        <h2>Tip Calculator!</h2>
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
