// 브라우저에서 위치좌표를 알아서 잡아주게 됨.
//getCurrentPosition(성공했을때,실패했을때) 두가지 요소가 필요함

const API_KEY = "589a809e2d1edb4de7f20e997824e8d5"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    console.log(url);
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
