const API_KEY = "a047551a3ebfee6ef42fbf9264601322";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `☁️ ${data.weather[0].main} ☁️ ${data.main.temp}º `;
      city.innerText = `${data.name} ✨`;
    }); // 실제 url에 이동할 필요 없이 javascript가 대신 url을 부름!
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);