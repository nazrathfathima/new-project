const socialMedia = ["whatsapp","instagram","youtube","twitter"];

const names = [
    "nazrath",
    "mersiha",
    "shanaya"
];


console.log(socialMedia[2]);
console.log(socialMedia[0]);

var vehicle = [];
vehicle[0] = "bus";
vehicle[1]="car";
vehicle[2]="bike";

console.log(vehicle);

vehicle[2] ="bicycle";

console.log(socialMedia.toString());
console.log(socialMedia.join(" ,"));
console.log(names);

const num =[2,3,4,6,8,9,10];
console.log(num.length);
console.log(num.sort());
console.log(num[7]);
console.log(socialMedia.length-1);
console.log(num.sort((a,b)=>a-b));

let num1=num.length;
for(let i=0;i<num1;i++){
    console.log(i);
}
console.log(num1);

socialMedia.forEach(myfun);

function myfun(value)
{
    console.log(value);
}


names.push("ayana");
names.push("rayan");
console.log(names);






