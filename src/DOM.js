export default (function DOM() {
  const app = document.getElementById("app");
  const searchBar = document.getElementById("searchBar");
  const searchBtn = document.getElementById("searchBtn");

  // for weather data
  const weatherContainer = document.getElementById("weather");
  //
  const city = document.createElement("span");
  const country = document.createElement("span");
  const temperature = document.createElement("span");
  const weather = document.createElement("span");
  const humidity = document.createElement("span");
  const toggleUnitsBtn = document.createElement("button");

  city.setAttribute("class", "weather__el  weather__city");
  country.setAttribute("class", "weather__el weather__country");
  temperature.setAttribute("class", "weather__el  weather__temperature");
  weather.setAttribute("class", "weather__el  weather__weather");
  humidity.setAttribute("class", "weather__el weather__humidity");
  toggleUnitsBtn.setAttribute("id", "toggleUnitsBtn");
  toggleUnitsBtn.setAttribute(
    "class",
    "weather__el weather__btn--convert-units"
  );

  const render = {
    city(data) {
      city.innerText = data;
      weatherContainer.appendChild(city);
    },
    country(data) {
      country.innerText = data;
      weatherContainer.appendChild(country);
    },
    temperature(data, unit = "C") {
      temperature.innerText = parseInt(data);
      temperature.setAttribute(
        "class",
        `weather__el  weather__temperature weather__temperature--${unit}`
      );
      weatherContainer.appendChild(temperature);
    },

    weather(data) {
      weather.innerText = data;
      weatherContainer.appendChild(weather);
    },
    humidity(data) {
      humidity.innerText = data;
      weatherContainer.appendChild(humidity);
    },
    toggleUnitsBtn() {
      toggleUnitsBtn.innerText = "C / F";
      weatherContainer.appendChild(toggleUnitsBtn);
    },
  };

  return {
    app,
    searchBar,
    searchBtn,
    render,
    toggleUnitsBtn,
    temperature,
    city,
  };
})();
