import allUiElements from "./allUiElements";
const { weatherCityVal, weatherState } = allUiElements;
export const popupValue = () => {
  const cityV = weatherCityVal.value.trim();
  const stateV = weatherState.value.trim();
  if (cityV === "" || stateV === "") {
    alert("Enter city and state value");
    return false;
  }

  return {
    cityval: cityV,
    stateval: stateV,
  };
};
