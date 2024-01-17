console.log(20 + 50);
console.log(4 - 2);
console.log(6 * 8);
console.log(50 / 10);
console.log(45 % 5);
let a = 6;
console.log(a++);
console.log(a);
console.log(++a);
console.log(5 ** 3);

// if if-else elseif switch case

function score(marks) {
    if (marks > 90) {
        console.log("pass");
    } else {
        console.log("fail");
    }
}

score(55);

function display(mark) {
    if (mark > 90) {
        console.log("A grade");
    } else if (mark > 60) {
        console.log("B grade");
    } else if (mark > 50) {
        console.log("C grade");
    }
}

display(96);



function calculate(operator) {
    let x = 8;
    let y = 6;

    switch (operator) {
        // other cases...
        case "++":
            console.log(x++);
            console.log(x);
            break;
        case "--":
            console.log(y--);
            console.log(y);
            break;
        // other cases...
    }
}

calculate("++");

function calculate(operator) {

    switch (operator) {
        case "+":
            console.log(50 + 60);
            break;
        case "-":
            console.log(90 - 80);
            break;
        case "*":
            console.log(50 * 40);
            break;
        case "/":
            console.log(80 / 2);
            break;
        case "%":
            console.log(60 % 6);
            break;
        default:
            console.log("don't perform any operation");
    }
}

calculate("%");






