// TODO this does not work associated with windSpeed getItem issue
const siteLocation = localStorage.getItem("site-Location");
const weatherCondition = localStorage.getItem("weather-Condition");
const temperature = localStorage.getItem("temperature");
const windSpeed = localStorage.getItem("wind-Speed");
const humidity = localStorage.getItem("humidity");
            
document.getElementById('site-Location').value = window.localStorage["site-Location"];
document.getElementById('weather-Condition').value = window.localStorage["weather-Condition"];
document.getElementById('temperature').value = window.localStorage["temperature"];
document.getElementById('wind-Speed').value = window.localStorage["wind-Speed"];
document.getElementById('humidity').value = window.localStorage["humidity"];

localStorage.clear();