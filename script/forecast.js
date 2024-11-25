const key = "heuyZEYHQiJ8sz4T1xg4bHSy0gEPDrim";

export const getWeather = async (id) => {
  const baseWeatherUrl =
    "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseWeatherUrl + query);
  const data = await response.json();

  return data[0]; // Returning the weather for the closest match
};

export const getCity = async (city) => {
  const baseCityUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseCityUrl + query);
  const data = await response.json();

  return data[0]; // Assuming the first result is the desired city
};

export const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  if (!cityDets || !weather) {
    throw new Error("City details or weather data are missing.");
  }

  return { cityDets, weather };
};
