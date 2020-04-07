import allUiElements from "./allUiElements";
const { loaderClass } = allUiElements;
export const showLoader = (parent) => {
  const loaderHtml = `<div class=${loaderClass}><img src="images/refresh.svg"></div>`;
  parent.insertAdjacentHTML("beforeend", loaderHtml);
};
export const hildeLoader = (parent) => {
  parent.removeChild(document.querySelector(`.${loaderClass}`));
};
