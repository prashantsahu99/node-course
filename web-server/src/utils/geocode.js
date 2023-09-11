const request = require('postman-request');

const geocode = (address, callback) =>{
    const url = `http://api.positionstack.com/v1/forward?access_key=34133e9ca4be413772e9e7e3184a7e3e&query=${address}`;
    request({url, json:true},(err,{body})=>{
        if(err){
            callback('Unable to connect to location services!', undefined);
        }
        else if(body.data == undefined){
            callback('Unable to find location. Try another search.', undefined);
        }
        else{
            callback(undefined, 
                data = {
                    latitude: body.data[0].latitude,
                    longitude: body.data[0].longitude,
                    location: body.data[0].label
                });
        }
    });
}

module.exports = geocode;