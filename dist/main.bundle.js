/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/


// openweather api
const API_KEY = "a18ad79a5046afd7f36a6f9fdc97a042";

function getData(city, unit = "metric") {
  //unit = 'imperial' for fahrenheit
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a18ad79a5046afd7f36a6f9fdc97a042&units=${unit}`;
  const dataFetch = fetch(url, { mode: "cors" });
  const data = dataFetch
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //   console.log(data.sys.country);
      //   console.log(data.name);
      //   console.log(data.main.temp);
      //   console.log(data.weather[0].main);
    });
}

getData("focsani");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUVBQW1FLEtBQUssZ0RBQWdELEtBQUs7QUFDN0gsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItY2hlY2svLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBvcGVud2VhdGhlciBhcGlcbmNvbnN0IEFQSV9LRVkgPSBcImExOGFkNzlhNTA0NmFmZDdmMzZhNmY5ZmRjOTdhMDQyXCI7XG5cbmZ1bmN0aW9uIGdldERhdGEoY2l0eSwgdW5pdCA9IFwibWV0cmljXCIpIHtcbiAgLy91bml0ID0gJ2ltcGVyaWFsJyBmb3IgZmFocmVuaGVpdFxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPWExOGFkNzlhNTA0NmFmZDdmMzZhNmY5ZmRjOTdhMDQyJnVuaXRzPSR7dW5pdH1gO1xuICBjb25zdCBkYXRhRmV0Y2ggPSBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGNvbnN0IGRhdGEgPSBkYXRhRmV0Y2hcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhLnN5cy5jb3VudHJ5KTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YS5uYW1lKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YS5tYWluLnRlbXApO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhLndlYXRoZXJbMF0ubWFpbik7XG4gICAgfSk7XG59XG5cbmdldERhdGEoXCJmb2NzYW5pXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9