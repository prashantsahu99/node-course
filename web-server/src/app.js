const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

//Define paths for Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPaths = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPaths);

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, resp) => {
  resp.render("index", {
    title: "Weather",
    name: "Prashant",
  });
});
app.get("/help", (req, resp) => {
  resp.render("help", { title: "Help", name: "Prashant" });
});

app.get("/about", (req, resp) => {
  resp.render("about", { title: "About", name: "Prashant" });
});
app.get("/weather", async (req, resp) => {
  if (!req.query.address) {
    return resp.send({ error: "Address not found" });
  }

  resp.send(await findWeather(req.query.address));
});

app.get("/help/*", (req, resp) => {
  resp.render("404", {
    title: "Help Article",
    errorMsg: "Help Article not found",
    name: "Prashant",
  });
});

app.get("*", (req, resp) => {
  resp.render("404", {
    title: "404",
    errorMsg: "Page not found",
    name: "Prashant",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

function findWeather(address) {
  return new Promise((resolve, reject) => {
    geocode(address, (err, { latitude, longitude, location }={}) => {
      if (err) {
        resolve({err});
      } else {
        forecast(latitude, longitude, (err, data) => {
          if (err) {
            resolve({err});
          } else {
            resolve({
              location: location,
              weather: data,
            });
          }
        });
      }
    });
  });
}
