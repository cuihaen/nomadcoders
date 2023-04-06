//arrays

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = [mon,tue,wed,thu,fri,sat,sun];

//[]로 감싼 array에서는 뭐든 넣을 수 있으며, 각 요소들 사이에는 반드시 ,로 구분지어주어야 한다.
const nonSense = [1,2,"hello",false,null,true,undefined,"haeun"];

console.log(dayOfWeek,nonSense);