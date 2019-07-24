import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavWrapper from './Components/NavWrapper';
import {NavData} from './Data/NavData';


function App() {

  return (
    <div className="App">
      <NavWrapper data={NavData}/>      
    </div>
  );
}

export default App;
