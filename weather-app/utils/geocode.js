const request = require('postman-request');

const geocode = (address, callback) =>{
    const url = `http://api.positionstack.com/v1/forward?access_key=34133e9ca4be413772e9e7e3184a7e3e&query=${address}`;
    request({url:url, json:true},(err,response)=>{
        if(err){
            callback('Unable to connect to location services!', undefined);
        }
        else if(response.body.data == undefined){
            callback('Unable to find location. Try another search.', undefined);
        }
        else{
            callback(undefined, 
                data = {
                    latitude: response.body.data[0].latitude,
                    longitude: response.body.data[0].longitude,
                    location: response.body.data[0].label
                });
        }
    });
}

module.exports = geocode;