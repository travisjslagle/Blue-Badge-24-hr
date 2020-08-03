import React from 'react';
import '../src/App.css';
import './assets/TrayvarLogo.svg';
import Navbar from './components/Navbar/navbar'
import ViewTwo from './components/View/ViewTwo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img className="logo" src={require('./assets/TrayvarLogo.svg')} width="350" height="250"></img>
      <ViewTwo></ViewTwo>
    </div>
  );
}

export default App;
