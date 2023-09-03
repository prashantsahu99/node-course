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

function findWeather(location) {
  geocode(location, (err, geoData) => {
    if (err) {
      return console.log("Error : " + err);
    } else {
      forecast(geoData.latitude, geoData.longitude, (err, data) => {
        if (err) {
          return console.log("forecast Error: " + err);
        } else {
          console.log(geoData.location)
          console.log(data);
        }
      });
    }
  });
};

// yargs.parse();
