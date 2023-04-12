const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//return false가 되면 age가 number라는 뜻!
//true가 반환되면 age는 number가 아니라 NaN이라는 의미.

if(isNaN(age)){
    //condition === true
    console.log("please write a number")
}else if(age<18){
    console.log("You are too young.")
}else if(age >= 18 && age <= 50){
    //&&를 활용해 앞 뒤 두가지 조건 모두 충족해야 true!
    //||를 활용하면 앞 뒤 둘 중 하나라도 충족시 true
    console.log("You can drink.")
}else{
    //condition === false
    console.log("Welcome.")
}