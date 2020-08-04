import React, {useState} from 'react';
import { get } from 'http';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


const APIData = (props) => {
    // const [nasaImg, setNasaImg] = useState();
    // const [weather, setWeather] = useState({});
    // const [restaurants, setRestaurants] = useState({});

    let userLong = props.userLong;
    let userLat = props.userLat;
    const getData = () => {
        // Downtown Indy
        
        console.log(userLat);
        
        // NASA
        const nasaKey = 'UV9GIvC2mGysQN2b2cDOgQ4pg7uJiVJRsLcQVgr4';
        const nasaBase = 'https://api.nasa.gov/planetary/earth/imagery';
        const nasaDate = '2014-02-01'  // this for now as Jul 31st did not return an image
        const dim = 0.15;
        let nasaUrl = `${nasaBase}?lon=${userLong}&lat=${userLat}&date=${nasaDate}&dim=${dim}&api_key=${nasaKey}`;
        fetch(nasaUrl)
            .then(res => res.blob())
            .then(blob => console.log(blob))
            .catch(err => console.error(err))
        // Weather
        const weatherKey = 'b5588ab3994f619bf839b645f2ecb671'
        const weatherBase = 'http://api.openweathermap.org/data/2.5/weather'
        let weatherUrl = `${weatherBase}?lat=${userLat}&lon=${userLong}&appid=${weatherKey}`;
        // **note** it looks like the temp comes back in Kelvin
            // temp is @ json.main.temp (I think)
        fetch(weatherUrl)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
        // Zomato
        const zomatoKey = '4b3cf7159b998f7d9dd7f5bc251282e5';
        const zomatoBase = 'https://developers.zomato.com/api/v2.1/search';
        let zomatoUrl = `${zomatoBase}?lat=${userLat}&lon=${userLong}&sort=real_distance`;
        fetch(zomatoUrl, {
            headers: {
                'user-key': zomatoKey
            }
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(40),
          },
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
      
      
        const classes = useStyles();
      
        return (
          <div className={classes.root}>
            
              
              <Fab variant="extended" onClick={getData}>
                  <NavigationIcon className={classes.extendedIcon}  />
                  Navigate
              </Fab>
              
            
          </div>
        );
      }

export default APIData;