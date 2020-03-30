const weather = document.querySelector(".weather");

const COORD_LS = "coords";
const API_KEY = "50ff274206ce9d2f0a78827ec7a8b104";

function saveCoord(lat, lon) {
    const coordObj = {
      latitude : lat,
      longitude : lon
    };
    localStorage.setItem(COORD_LS, JSON.stringify(coordObj));
}


function successCoord(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    saveCoord(latitude, longitude);
    paintWeather(latitude, longitude);

}

function failCoord() {
    console.log("Can't access geolocation");
}


function paintWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
      return response.json();
    }).then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.textContent = `${temperature}℃ @ ${place}`;
    })


}

function askForCoord() {
    const currentCoord = navigator.geolocation.getCurrentPosition(successCoord, failCoord);
}

function loadCoord() {
    const loadedCoord = localStorage.getItem(COORD_LS);
    if (loadedCoord === null) {
        askForCoord();
    } else {
        const parseCoord = JSON.parse(loadedCoord)
        const lat = parseCoord.latitude;
        const lon = parseCoord.longitude;
        paintWeather(lat, lon);
    }
}

function init() {
    loadCoord();
}

init();
