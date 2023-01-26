const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
  res.send("Server is up and running.");
});

const url = "https://api.openweathermap.org/geo/1.0/direct?q=Qatar,QAT634&appid=6f625eed1c4e93c0bdf94a864ef9a034"

https.get(url, function(response) {
  console.log(response.statusCode);

  response.on("data", function(data) {
    const weatherData = JSON.parse(data);
    console.log(weatherData);
  });

});









app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});