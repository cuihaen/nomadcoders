const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

// onLoginSubmit(); 그냥 이렇게 바로 적어두면 브라우저가 실행되면서 바로 해당 이벤트를 실행함.