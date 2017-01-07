//zainstalować axios npm install axios --save

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=80df73d33d06d57a7cc02d337060e727&units=metric';

//80df73d33d06d57a7cc02d337060e727


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message ) {
                throw new Error (res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}