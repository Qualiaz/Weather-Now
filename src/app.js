"use strict";

import DOM from "./DOM";

// openweather api
const API_KEY = "a18ad79a5046afd7f36a6f9fdc97a042";

function getData(city, unit = "metric") {
  //unit = 'imperial' for fahrenheit
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a18ad79a5046afd7f36a6f9fdc97a042&units=${unit}`;
  const dataFetch = fetch(url, { mode: "cors" });
  const data = dataFetch
    .then((resp) => resp.json())
    .then((weatherData) => {
      console.log(data);
      DOM.render.data(weatherData.name);
      //   console.log(data.sys.country)
      //   console.log(data.main.temp);
      //   console.log(data.weather[0].main);
    });
}

getData("focsani");
