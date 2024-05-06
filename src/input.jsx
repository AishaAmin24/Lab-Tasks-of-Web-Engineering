import React, { useState } from 'react';

function ColorChanger() {
  const [carText, setCarText] = useState('My car is red');

  const handleClick = () => {
    setCarText('My car is blue');
  };

  return (
    <div>
      <input type="text" value={carText} readOnly />
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
