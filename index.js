alert("Hi this is Nazrath");
alert("hello world");
/*var,let,const,global

console.log("hello world");
console.log("this is my new javascript");*/


function getname()
{
    //var name="nazrath";
    name="nazrath";
    console.log("name");
}
console.log("inside function", name);
getname();
console.log("my name is ", name);
function add()
{
    let x, y, z;
    x = 10;
    y = 20;
    z = x + y;
    console.log("the value of z is", z);
    x = 20;
    c = x + y; // It seems 'c' is not declared; consider using 'let c = x + y;'
    console.log(c);
}
add();
x = 230;
console.log(x);

