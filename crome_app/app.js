const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = 'Hello '+username;
    // greeting.innerText = `Hello ${username}`; 위와 동일함!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
//event.preventDefault를 넣어주면 해당 브라우저가 기본동작으로 새로고침을 실행하는 것을 막아줄 수 있다.