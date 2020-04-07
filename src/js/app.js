import allUiElements from "./views/allUiElements";
import { popupValue } from "./views/weatherPopup";
import WeatherModel from "./models/WeatherModel";
import { getFromLocalStorage } from "./models/WeatherModel";
import { showWeatherUi } from "./views/weatherView";
import { showLoader, hildeLoader } from "./views/commonUi";
import config from "./config";
const state = {};

//On load get value from localStorage

document.addEventListener("DOMContentLoaded", () => {
  //Get Value from localStorage
  const { city, state } = getFromLocalStorage(config.localStorageKey);
  if (city !== undefined && state !== undefined) {
    performFetch(city, state)
      .then((e) => console.log("Default value Fetched"))
      .catch((e) => console.log(e));
  }
});

//On form submit get state and city.
allUiElements.weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherAndStore();
});

//Get weather from ui
const getWeatherAndStore = () => {
  const { cityval, stateval } = popupValue();
  if (cityval !== undefined && stateval !== undefined) {
    performFetch(cityval, stateval)
      .then((e) => $(allUiElements.modelId).modal("hide"))
      .catch((e) => console.log("Error"));
  }
};

//Call weather api with parameters
const performFetch = async (cityval, stateval) => {
  //1.Show loader
  showLoader(allUiElements.weatherForm);
  //2.Get weather from api
  state.weatherObj = new WeatherModel(cityval, stateval);
  try {
    await state.weatherObj.getWeather();
    //3.Update in ui
    showWeatherUi(state.weatherObj);
    //4. Hide loader
    hildeLoader(allUiElements.weatherForm);
  } catch (error) {
    alert("Invalid entries");
    //4. Hide loader
    hildeLoader(allUiElements.weatherForm);
    throw error;
  }
};
