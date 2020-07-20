import React, {useState} from 'react';

import api from './services/api';
import './App.css'

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [interval, setInterval] = useState(1);

  const handleTurnOnButton = async () => {
    await api.get('turn-on/2');
  };

  const handleTurnOffButton = async () => {
    await api.get('turn-off/2');
  };

  const handleMessageSubmit = async () => {
    console.log(message)
    await api.post('lcd', {
      message,
    });
  };

  const handleIntervalSubmit = async () => {
    await api.get(`blink/2?interval=${interval * 1000}`);
  };


  return (
    <div className="main">
      <div className="content">
        <h1>Simple IoT</h1>

        <h3>Button Control</h3>
        <div className="row">
          <button onClick={() => handleTurnOnButton()}>Turn On</button>
          <button onClick={() => handleTurnOffButton()}>Turn Off</button>
        </div>

        <h3>Write in LCD display</h3>
        <input placeholder="Max 16 characters" maxLength={16} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={() => handleMessageSubmit()} style={{marginTop: 8}}>Send</button>

        <h3>Blink Led</h3>
        <div className="row">
          <input style={{width: '70%'}} placeholder="Interval (in seconds)" onChange={(e) => setInterval(Number(e.target.value))}/>
          <button onClick={() => handleIntervalSubmit()} style={{width: '28%'}}>Blink</button>
        </div>
      </div>
    </div>
    );
  }
  
  export default App;
  