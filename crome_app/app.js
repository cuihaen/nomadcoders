/* array로 표현했을 때 */
// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

//player[0] = name;
//player[1] = points;

//const player = ["nico",121212,false,"little bit"];


//object
const player = {
    name : "nico",
    points : 10,
    handSome : false,
    fat : "little bit",
}

console.log(player);
console.log(player.name);
console.log(player["name"]); //<-바로 위의 것과 같은 결과값이 찍히게 된다.
player.name; // <- object!

player.handSome = true;
player.lastName = "potato"; //새로운 object추가하기

console.log(player);
