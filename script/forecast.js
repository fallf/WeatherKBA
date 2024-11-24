const key = "heuyZEYHQiJ8sz4T1xg4bHSy0gEPDrim";

// Get Weather Information
const getWeather = async (id) => {
  const baseWeatherUrl =
    "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseWeatherUrl + query);
  const data = await response.json();

  return data[0]; // Assuming the response array has the current conditions
};

// Get City Information
const getCity = async (city) => {
  const baseCityUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseCityUrl + query);
  const data = await response.json();

  return data[0]; // Assuming the first result is the desired city
};

// Fetch city and weather information
getCity("miami")
  .then((cityData) => {
    console.log("City Data:", cityData); // Debugging city data
    return getWeather(cityData.Key); // Accessing the correct property
  })
  .then((weatherData) => {
    console.log("Weather Data:", weatherData); // Debugging weather data
  })
  .catch((err) => console.log("Error:", err));

// getWeather("347936");
