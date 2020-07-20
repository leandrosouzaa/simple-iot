import React from 'react';

import './App.css'

function App() {
  return (
    <div className="main">
      <div className="content">
        <h1>Simple IoT</h1>

        <h3>Button Control</h3>
        <div className="row">
          <button>Turn On</button>
          <button>Turn Off</button>
        </div>

        <h3>Write in LCD display</h3>
        <input placeholder="Max 16 characters" maxLength={16}/>
        <button style={{marginTop: 8}}>Send</button>

        <h3>Blink Led</h3>
        <div className="row">
          <input style={{width: '70%'}} placeholder="Interval (in seconds)" maxLength={16}/>
          <button style={{width: '28%'}}>Blink</button>
        </div>
      </div>
    </div>
    );
  }
  
  export default App;
  