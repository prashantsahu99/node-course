const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=66f2ccf9087dad1310e85bc65e79a3b6&query=40,-75&units=m`;

const request = http.request(url,(response)=>{
    let data ='';
    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    });
    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (err)=>{
    console.log(err);
});
request.end();