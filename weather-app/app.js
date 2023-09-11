// const yargs = require("yargs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

address = process.argv[2];
/* using arguments */
if(!address){
  console.log('Please provide an addresss');
}
else{
  findWeather(address);
}
/*using yargs*/
// yargs.command({
//   command: "address",
//   describe: "Please provide address",
//   builder: {
//     location: {
//       describe: "Address",
//       demandOption: true,
//       type: "string",
//     }
//   },
//   handler: (argv) => {
//     findWeather(argv.title)
//   },
// });

function findWeather(address) {
  geocode(address, (err, {latitude, longitude, location}) => {
    if (err) {
      return console.log("Error : " + err);
    } else {
      forecast(latitude, longitude, (err, data) => {
        if (err) {
          return console.log("forecast Error: " + err);
        } else {
          console.log(location)
          console.log(data);
        }
      });
    }
  });
};

// yargs.parse();
