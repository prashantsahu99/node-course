const validator = require('validator');
const getNotes = require('./notes');
console.log(getNotes());
console.log(validator.isURL('https://nodejs.org'));