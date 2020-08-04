import React, {useState} from 'react';
import '../src/App.css';
import './assets/TrayvarLogo.svg';
import Navbar from './components/Navbar/navbar'
// import ViewOne from './components/View/ViewOne';
import NavigationIcon from '@material-ui/icons/Navigation';
import UserLocation from './Location/UserLocation';

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <UserLocation />
      {/* <img className="logo" src={require('./assets/TrayvarLogo.svg')} width="350" height="250"></img> */}
      {/* <ViewOne /> */}
      <NavigationIcon />
    </div>
  );
}

export default App;
