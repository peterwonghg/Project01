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

            displayCity();

            // Present today's date, weather icon condition, temperature, wind speed and humidity
            presentDayWeather.innerHTML = `<ul>
<li class="title">${currentData.name} </li>
<li><img src ="http://openweathermap.org/img/wn/${currentData.weather[0].icon
                }@2x.png" /></li>
<li>Temp/°C: ${(currentData.main.temp)}</li>
<li>Wind/mps: ${currentData.wind.speed}</li>
<li>Humidity/%: ${currentData.main.humidity}</li>
</ul>
`;         

// Add other desired weather information

            const windSpeedValue = (currentData.wind.speed);

            localStorage.setItem('wind-Speed', windSpeedValue);

// fix getItem bug into review page
                
            })
        };


function displayCity() {
    if (localStorage.getItem("city")) {
        searchHistory = JSON.parse(localStorage.getItem("city"));
    }
}
displayCity();

searchForm.addEventListener("submit", dashboard); 
