let cityInputEl = document.querySelector("#cityInput");
let searchForm = document.querySelector("#searchForm");
let presentDayWeather = document.querySelector("#currentWeather");

function dashboard(event) {
    event.preventDefault();
    let cityName = cityInputEl.value;
    displayWeather(cityName);
}

const apiKey = "559a901ce8fe83f4462c290f516fd7bc";
const lang = 'en';
const units = 'metric';

function displayWeather(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (currentData) {
            console.log(currentData)


            // const cityLocationValue = (currentData.name);
            // const temperatureValue = (currentData.main.temp);
            const windSpeedValue = (currentData.wind.speed);
            // const humidityValue = (currentData.main.humidity);
            // const windSpeed = (windSpeedValue);
            // localStorage.setItem('city-Location', cityLocationValue);
            // localStorage.setItem('temperature', temperatureValue);
            localStorage.setItem('wind-Speed', windSpeedValue);
            // localStorage.setItem('humidity', humidityValue);

            // const form1 = document.getElementById('form1');
            // const windSpeed = document.getElementById('windSpeed');

            // form1.addEventListener('submit',function(e){
            //     e.preventDefault();

            // const windSpeed = localStorage.getItem("wind-Speed");
            
            // document.getElementById('wind-Speed').value = window.localStorage["wind-Speed"];

                
            })
        };















            // const feelsLikeValue = (currentData.main.feels_like);

            // localStorage.setItem('feels-like', feelsLikeValue);

            // const feelsLike = localStorage.getItem("feels-Like");
            
            // document.getElementById('feels-Like').value = window.localStorage["feels-Like"];

            // let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${apiKey}&units=${units}&lang=${lang}`;
            // fetch(oneCallUrl)
            //     .then(function (response) {
            //         console.log(response)
            //         // return response.json();
            //         const weather = response.json();
            //         console.log(weather.data);

            //     })
            //     .then(function (fiveDayData) {
            //         if (searchHistory.includes(currentData.name) === false) {
            //             searchHistory.push(currentData.name);
            //             localStorage.setItem("city", JSON.stringify(searchHistory));
            //     }
            //     displayCity();
            // });


function displayCity() {
    if (localStorage.getItem("city")) {
        searchHistory = JSON.parse(localStorage.getItem("city"));
    }
}
displayCity();

searchForm.addEventListener("submit", dashboard); 
