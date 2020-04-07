const axios = require("axios");
import config from "../config";

export default class WeatherModel {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
  async getWeather() {
    try {
      const requestMake = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&&units=metric&appid=${config.appId}`
      );
      this.weatherData = requestMake.data;

      //Store to local Storage
      storeToLocalStorage(config.localStorageKey, this);
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}

const storeToLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getFromLocalStorage = (key) => {
  const loalStorageVal = localStorage.getItem(key);
  if (loalStorageVal === null) {
    return config.localStorageDefaultObj;
  }
  return JSON.parse(loalStorageVal);
};
