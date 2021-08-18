const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const userAddress = process.argv[2];

if (!userAddress) {
  return console.log("Please provide a location");
} else {
  geocode(userAddress, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
      // console.log(userData);
    });
  });
}
