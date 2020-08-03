// Indianapolis == lat: 39.768, long: -86.156

// NASA API -- api.nasa.gov

// user: travisjslagle@gmail.com
// key: UV9GIvC2mGysQN2b2cDOgQ4pg7uJiVJRsLcQVgr4

// example: https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=UV9GIvC2mGysQN2b2cDOgQ4pg7uJiVJRsLcQVgr4

// indianapolis ex: https://api.nasa.gov/planetary/earth/imagery?lon=-86.156&lat=39.168&date=2014-02-01&api_key=UV9GIvC2mGysQN2b2cDOgQ4pg7uJiVJRsLcQVgr4
    // could not get to work when I changed the date

// FETCH to this API:
const nasaKey = 'UV9GIvC2mGysQN2b2cDOgQ4pg7uJiVJRsLcQVgr4';
const nasaBase = 'https://api.nasa.gov';
const nasaDate = '2014-02-01'  // this for now as Jul 31st did not return an image
const dim = 0.15;

let nasaUrl = `${nasaBase}&lon=${userLong}&lat=${userLat}&date=${nasaDate}&dim=${dim}&api_key=${nasaKey}`;


// looking at response in Postman -- I do not think this returns JSON data, just an image. Look up .blob() methods 
fetch(nasaUrl)
    .then(res => res.blob())
    .then(json => console.log(json))
    .catch(err => console.error(err));


// openweathermap.org API -- home.openweathermap.org

// user: travisjslagle@gmail.com
// key: b5588ab3994f619bf839b645f2ecb671

// indy ex: http://api.openweathermap.org/data/2.5/weather?lat=39.768&lon=-86.156&appid=b5588ab3994f619bf839b645f2ecb671


// FETCH call:
const weatherKey = 'b5588ab3994f619bf839b645f2ecb671'
const weatherBase = 'http://api.openweathermap.org/data/2.5/weather'

let weatherUrl = `${weatherBase}?lat=${userLat}&lon=${userLong}&appid=${weatherKey}`;

// **note** it looks like the temp comes back in Kelvin
fetch(weatherUrl)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));



// ZOMATO api -- developers.zomato.com/api

// user: travisjslagle@gmail.com
// key: 4b3cf7159b998f7d9dd7f5bc251282e5

// indy ex: https://developers.zomato.com/api/v2.1/search?lat=39.77&lon=-86.16&sort=real_distance
    // this sorts by distance from points included -- but the api key is handled in the header, not the url string


            // REQUEST HEADER NEEDS TO BE: 'user-key: 4b3cf7159b998f7d9dd7f5bc251282e5'
const zomatoKey = '4b3cf7159b998f7d9dd7f5bc251282e5';
const zomatoBase = 'https://developers.zomato.com/api/v2.1/search';

let zomatoUrl = `${zomatoBase}?lat=${userLat}&lon=${userLong}&sort=real_distance`;

fetch(zomatoUrl)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));