// TODO this does not work associated with windSpeed getItem issue
const windSpeed = localStorage.getItem("wind-Speed");
            
document.getElementById('wind-Speed').value = window.localStorage["wind-Speed"];

localStorage.clear();