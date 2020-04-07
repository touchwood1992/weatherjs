import allUiElements from "./allUiElements";
const {
  uiCity,
  uiState,
  uiCloudy,
  uiTemp,
  uiOne,
  uiTwo,
  uiThree,
  uiFour,
} = allUiElements;
export const showWeatherUi = (obj) => {
  uiCity.innerHTML = obj.city;
  uiState.innerHTML = obj.state;
  uiCloudy.innerHTML = obj.weatherData.weather[0].description;
  uiTemp.innerHTML = `${obj.weatherData.main.temp} C`;
  uiOne.innerHTML = `Humidity: ${obj.weatherData.main.humidity}`;
  uiTwo.innerHTML = `Pressure: ${obj.weatherData.main.pressure}`;
  uiThree.innerHTML = `Maximum Temperature: ${obj.weatherData.main.temp_max} C`;
  uiFour.innerHTML = `Minimum Temperature: ${obj.weatherData.main.temp_min} C`;
};
