// DOM Elements
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

console.log(details);

// Update the UI
const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  // Update the info on the card
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;
  //update the night/day & icon images

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "images/day.jpg";
  } else {
    timeSrc = "images/night.jpg";
  }

  time.setAttribute("src", timeSrc);
  //remove the d-none class

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// Update City Data
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather };
};

// Event Listener for Form Submit
cityForm.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Prevent default form submission behavior

  // Get city value from the form
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Fetch and update the UI with new city data
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
