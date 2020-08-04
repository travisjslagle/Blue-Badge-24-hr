import React, {useState} from 'react';
import APIData from '../API-Data/APIData';



const UserLocation = () => {

const [userLat, setUserLat] = useState(0);
const [userLong, setUserLong] = useState(0);


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    setUserLat(crd.latitude);
    setUserLong(crd.longitude);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
  return (
      <div>
          <APIData userLat={userLat} userLong={userLong} />
      </div>
  )
}
export default UserLocation;