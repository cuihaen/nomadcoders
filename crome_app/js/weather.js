// 브라우저에서 위치좌표를 알아서 잡아주게 됨.
//getCurrentPosition(성공했을때,실패했을때) 두가지 요소가 필요함

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log("You live in",lat,lng);
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
