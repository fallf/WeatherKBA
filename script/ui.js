export const updateUI = (data) => {
  const { cityDets, weather } = data;

  const details = document.querySelector(".details");
  const time = document.querySelector("img.time");
  const icon = document.querySelector(".icon img");
  const card = document.querySelector(".card");

  // Update details
  details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
      </div>
    `;

  // Update weather icon
  const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  // Update time of day image
  const timeSrc = weather.IsDayTime ? "images/day.jpg" : "images/night.jpg";
  time.setAttribute("src", timeSrc);

  // Remove "d-none" class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
