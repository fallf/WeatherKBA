const key = "heuyZEYHQiJ8sz4T1xg4bHSy0gEPDrim";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data[0]);
};

getCity("miami");
