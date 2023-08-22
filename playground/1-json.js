const fs = require('fs');
let dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
data.name = 'Mukul';
data.age = 25

const updateJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',updateJSON);

dataBuffer = fs.readFileSync('1-json.json');
dataJSON = dataBuffer.toString();
data = JSON.parse(dataJSON);
console.log(data);
