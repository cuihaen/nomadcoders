const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(e){
    e.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);

//event.preventDefault를 넣어주면 해당 브라우저가 기본동작으로 새로고침을 실행하는 것을 막아줄 수 있다.