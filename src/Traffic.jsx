// src/TrafficLight.js
import React, { useState, useEffect } from 'react';
import './Traffic.css';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    let timer;
    switch (light) {
      case 'red':
        timer = setTimeout(() => setLight('green'), 4000);
        break;
      case 'yellow':
        timer = setTimeout(() => setLight('red'), 3000);
        break;
      case 'green':
        timer = setTimeout(() => setLight('yellow'), 2000);
        break;
      default:
        break;
    }

    // Cleanup function to clear the timeout when the component unmounts or light changes
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
