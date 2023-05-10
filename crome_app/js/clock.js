const clock = document.querySelector('#clock');

function sayHello(){
    console.log('Hello');
}

//setInterval(sayHello, 5000);
//sayHello를 5초에 한번씩 실행

setTimeout(sayHello, 5000);
//sayhello를 5초 뒤에 한번 실행