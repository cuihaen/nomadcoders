const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');

function onLoginSubmit(e){
    e.preventDefault();
    console.log(loginInput.value);
}

function handleLink(e){
    e.preventDefault();
    alert('clicked!')
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLink);

//event.preventDefault를 넣어주면 해당 브라우저가 기본동작으로 새로고침을 실행하는 것을 막아줄 수 있다.