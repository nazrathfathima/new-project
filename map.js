const marks=[80,70,43,56,23,45];

const grade = marks.map(function(e){
    console.log(e)
    let result = e >= 50 ? "pass": "fail";
    return result;
});

console.log(grade);

const grade1 = marks.map(e => e >= 50 ? "pass" :"fail")
console.log(grade1);
console.log(marks);

const pass = marks.filter(e => e>=50);
console.log(pass);

const fail = marks.filter(e => e<45 ? "pass": "fail")
console.log(fail);