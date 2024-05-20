import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('Red');

  useEffect(() => {
    let timer;
    if (state === 'Red') {
      timer = setTimeout(() => setState('Green'), 20000);
    } else if (state === 'Green') {
      timer = setTimeout(() => setState('Yellow'), 15000);
    } else if (state === 'Yellow') {
      timer = setTimeout(() => setState('Red'), 5000);
    }
    return () => clearTimeout(timer);
  }, [state]);

  const handleClick = (newState) => {
    setState(newState);
  };

  return (
    <div>
      <div className="trafficLight">
          <div className={`light ${state === 'Red' ? 'redlight active' : 'redlight'}`}><h2>S1</h2></div>
          <div className={`light ${state === 'Green' ? 'greenlight active' : 'greenlight'}`}><h2>S2</h2></div>
          <div className={`light ${state === 'Yellow' ? 'yellowlight active' : 'yellowlight'}`}><h2>S3</h2></div>
      </div>
      <div className="eventhandle">
        <button onClick={() => handleClick('Red')} style={{backgroundColor:"red"}}>Red</button>
        <button onClick={() => handleClick('Green')} style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => handleClick('Yellow')} style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
