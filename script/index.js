import { updateCity } from "./forecast.js";
import { updateUI } from "./ui.js";

const cityForm = document.querySelector("form");

// Event Listener for Form Submit
cityForm.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Prevent default form submission behavior

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => {
      console.error(err);
      alert("City not found or there was an error fetching the weather data.");
    });
});
