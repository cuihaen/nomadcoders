const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//return false가 되면 age가 number라는 뜻!
//true가 반환되면 age는 number가 아니라 NaN이라는 의미.

if(isNaN(age)){
    //condition === true
    console.log("please write a number")
}else{
    //condition === false
    console.log(age)
}