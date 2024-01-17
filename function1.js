function fun(a1, a2) {
    console.log("this is my first function");
    return a1 * a2;
}

let result = fun(8 * 2);
console.log("return");

let mul = function() {
    console.log("multiplication");
};
let fatmul = () => {
    console.log("8*2");
};

var fun = () => console.log("new arrow function");
fun();


