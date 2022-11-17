"use strict";
import DOM from "./DOM";
import "./styles/index.scss";

// not much of a serious app, idc about exposing
const API_KEY = "a18ad79a5046afd7f36a6f9fdc97a042";

let isCelsiusRender = true;
let searchedLocation;
let celsiusTemp;
let fahrenheitTemp;

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
  const dataFetch = fetch(url, { mode: "cors" });
  const data = dataFetch
    .then((resp) => resp.json())
    .then((weatherData) => {
      if (weatherData.name === undefined)
        return alert("enter a valid city name");
      DOM.render.city(weatherData.name);
      DOM.render.country(weatherData.sys.country);
      DOM.render.humidity(weatherData.main.humidity);
      DOM.render.weather(weatherData.weather[0].main);
      DOM.render.temperature(weatherData.main.temp);
      DOM.render.toggleUnitsBtn();
      celsiusTemp = weatherData.main.temp;
    });
}

const celsiusToFahrenheit = () => {
  const cToF = celsiusTemp * (9 / 5) + 32;
  fahrenheitTemp = cToF;
  DOM.render.temperature(fahrenheitTemp, "F");
};

const fahrenheitToCelsius = () => {
  const fToC = (fahrenheitTemp - 32) * (5 / 9);
  celsiusTemp = fToC;
  DOM.render.temperature(celsiusTemp, "C");
};

DOM.searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherData(DOM.searchBar.value);
  searchedLocation = DOM.searchBar.value;
});

DOM.toggleUnitsBtn.addEventListener("click", (e) => {
  if (isCelsiusRender) {
    isCelsiusRender = false;
    celsiusToFahrenheit();
  } else {
    fahrenheitToCelsius();
    isCelsiusRender = true;
  }
});

// getWeatherData("focsani");
console.log(DOM.city);
