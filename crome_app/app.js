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

//array명 뒤에 []를 추가한 후 가져오고자 하는 값의 순서를 적어주면 그 값을 불러올 수 있다.
console.log(dayOfWeek[5]);