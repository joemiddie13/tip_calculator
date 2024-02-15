import React from 'react';

function PartyNumber({ partyNumber, setPartyNumber }) {
  return (
    <div>
      <label htmlFor="partyNumber">Number of People:</label>
      <button onClick={() => setPartyNumber(Math.max(1, partyNumber - 1))}>-</button>
      <input
        id="partyNumber"
        type="number"
        value={partyNumber}
        readOnly
      />
      <button onClick={() => setPartyNumber(partyNumber + 1)}>+</button>
    </div>
  );
}

export default PartyNumber;
