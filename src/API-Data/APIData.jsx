import React, {useState} from 'react';

const APIData = (props) => {
    // const [nasaImg, setNasaImg] = useState();
    // const [weather, setWeather] = useState({});
    // const [restaurants, setRestaurants] = useState({});
    const getData = () => {
        // Downtown Indy
        let userLong = -86.156;
        let userLat = 39.768;
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
    return(
        <div className="main">
            <div>
            </div>
        </div>
    )
}
export default APIData;