// references --> https://developer.mozilla.org/pt-BR/docs/Web/API/Navigation_timing_API
// references --> https://docs.w3cub.com/dom/navigation_timing_api
const perfData = window.performance.timing;
console.log("Rendering Time", perfData.domComplete - perfData.domLoading);
console.log("Loading Time", perfData.loadEventEnd - perfData.navigationStart);