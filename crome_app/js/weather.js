// 브라우저에서 위치좌표를 알아서 잡아주게 됨.
//getCurrentPosition(성공했을때,실패했을때) 두가지 요소가 필요함

const API_KEY = "api_key"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
    //fetch를 활용해 자바스크립트가 자동으로 url을 불러와 저장한다.
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
