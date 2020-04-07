import allUiElements from "./allUiElements";
const { weatherCityVal, weatherCountryVal } = allUiElements;
export const popupValue = () => {
  if (
    weatherCityVal.value.trim() === "" ||
    weatherCountryVal.value.trim() === ""
  ) {
    alert("Enter city and state value");
    return false;
  }

  return {
    cityval: weatherCityVal.value,
    stateval: weatherCountryVal.value,
  };
};
