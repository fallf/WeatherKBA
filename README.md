# Weather Forecast Application

This is a weather forecast application that allows users to view the current weather for a specified city. The app dynamically updates weather details and displays appropriate day or night background images based on real-time weather data.

## Features

- Search for weather information by city name.
- Displays:
  - City name.
  - Weather condition (e.g., sunny, rainy, etc.).
  - Current temperature in Fahrenheit.
- Dynamic icons for weather conditions.
- Day and night background updates based on the time.

## Technologies Used

- HTML5
- CSS3 (with Bootstrap for styling)
- JavaScript (modularized using ES6 modules)
- AccuWeather API for weather data

## How to Use

1. Clone the repository.
2. Open the `index.html` file in your browser.
3. Enter the name of the city in the input field to get the weather information.
4. The app will display the current weather condition, temperature, and a background image corresponding to day or night.

## API Key Setup

The application uses the [AccuWeather API](https://developer.accuweather.com/) to fetch weather data. Ensure you replace the placeholder `key` in `forecast.js` with your own API key.

```javascript
// Replace this with your API key
const key = "YOUR_API_KEY";
```
