const clock = document.querySelector('#clock');

function sayHello(){
    console.log('Hello');
}

setInterval(sayHello, 5000);
//sayHello를 5초에 한번씩 실행