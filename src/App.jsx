import React from 'react';
import '../src/App.css';
import './assets/TrayvarLogo.svg';
import Navbar from './components/Navbar/navbar'
import ViewOne from './components/View/ViewOne';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <img className="logo" src={require('./assets/TrayvarLogo.svg')} width="350" height="250"></img> */}
      <ViewOne></ViewOne>
      <NavigationIcon></NavigationIcon>
    </div>
  );
}

export default App;
