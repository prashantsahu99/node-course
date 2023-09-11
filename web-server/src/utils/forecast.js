const request = require('postman-request');

forecast = (latitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=66f2ccf9087dad1310e85bc65e79a3b6&query=${latitude},${longitude}&units=m`;
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services", undefined);
        } else if (body.error) {
            callback("Unable to find location!", undefined);
        } else {
            callback(undefined, 
            `${body.current.weather_descriptions[0]}, It is currently response ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
            );
        }
    });
}

module.exports = forecast;