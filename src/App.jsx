import React from 'react';
import '../src/App.css';
import './assets/TrayvarLogo.svg';
import Navbar from './components/Navbar/navbar'
import ViewTwo from './components/View/ViewTwo';
// import Location from './map/Location';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img className="logo" src={require('./assets/TrayvarLogo.svg')} width="350" height="250" alt="logo"></img>
      <ViewTwo></ViewTwo>
      {/* <Location /> */}
    </div>
  );
}

export default App;
