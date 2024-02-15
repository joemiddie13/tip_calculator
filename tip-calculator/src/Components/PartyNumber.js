import React from 'react';

function PartyNumber({ partyNumber, setPartyNumber }) {
  return (
    <div>
      <label htmlFor="partyNumber">Number of People:</label>
      <input
        id="partyNumber"
        type="number"
        min="1"
        value={partyNumber}
        onChange={(e) => setPartyNumber(e.target.value)}
        placeholder="Enter Number of People"
      />
    </div>
  );
}

export default PartyNumber;
