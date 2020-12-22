//1. random int in (a,b)
function randomNum(a,b) {
    return Math.random() * (b - a) + a;

}
//arrow
let randomNum = (a, b) => Math.random() * (b - a) + a;


//2.valid Triangle
function isTriangle(a, b, c) {
    return (a + b > c && b + c > a && a + c > b)      
}
//arrow
let isTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b;

//3. guess Num 

function guessNum() {
    let a = Math.round(Math.random(0, 10));
    let guess = +prompt("Guess???"); 
    let count = 1; 
    while (count < 3 && guess != null && guess != "") {
        if (guess == a) { return "Amazing, good job!" }
        else {
            guess = +prompt("Wrong! Try again...");
            count += 1;
        }
    }
    return "You're such a failure!!!"
}

let guessNum = () => {
    let a = Math.round(Math.random(0, 10));
    let guess = +prompt("Guess???"); 
    let count = 1; 
    while (count < 3 && guess != null && guess != "") {
        if (guess == a) { return "Amazing, good job!" }
        else {
            guess = +prompt("Wrong! Try again...");
            count += 1;
        }
    }
    return "You're such a failure!!!"
}

//4.Nearest 
function getNearest(a, b) {
    if (Math.abs(100 - a )<= Math.abs(100 - b)) { return a; }
    return b;
}

let getNearest = (a,b) => (Math.abs(100 - a )<= Math.abs(100 - b)) ? a : b;

// 5.tang, giam dan 
function sequence(a, b, c) {
    return ((a <= b && b <= c) || (a >= b && b >= c));
}      

let sequence = (a, b, c) => ((a <= b && b <= c) || (c <= b && b <= a))

//6.countDecimal - I think this solution is logically correct 
//but idk why luc chay tren trinh duyet thi
//co so dung, co so sai thay oi. 
//(eg. countDecimal(12.543) -> 3 CORRECT but countDecimal(123.456) -> 14????? 
// ma countDecimal(1234.456) -> 3 moi ghe. Tell me why ???)
//I think la do may tinh bi stupid???
//chu ve mat logic thi solution nay dung ma thay nhi??? :D 
//Anw, I came up with another solution, check it out before tru diem em nhe thay!!
function countDecimal(num) {
    let count = 0; 
    while (num % 1 != 0) {
        num = num * 10; 
        count += 1;
    }
    return count;
}
//arrow
let countDecimal = (num) => {
    let count = 0; 
    while (num % 1 != 0) {
        num = num * 10; 
        count += 1;
    }
    return count;
}
//6. Solution 2: -> string 
function countDecimal(num) {
    return num.toString().length - num.toString().indexOf(".") -1;
}
//arrow 
let countDecimal = (num)=> num.toString().length - num.toString().indexOf(".") -1;

//7. isAscending(num)
function isAscending(num) {
    let s = num.toString();
    for (let i = 0; i < s.length; i++){
        if (s[i] > s[i + 1]) { return false; }
    }
    return true; 
}

//arrow 
let isAscending = (num) => {
    let s = num.toString();
    for (let i = 0; i < s.length; i++){
        if (s[i] > s[i + 1]) { return false; }
    }
    return true; 
}


//8.countEven 
function countEven(num) {
    let even = 0; 
    while (num > 0) {
        if ((num % 10) % 2 == 0) {
            even +=1
        }
        num = Math.floor(num/10);
    }
    return even;    
}
//arrow
let countEven = (num) => {
    let even = 0; 
    while (num > 0) {
        if ((num % 10) % 2 == 0) {
            even +=1
        }
        num = Math.floor(num/10);
    }
    return even;    
}

//8. -> string
let countEven = (num) => {
    let s = num.toString(),count=0;
    for (let i = 0; i < s.length; i++){
        if (+s[i] % 2 == 0) {
            count += 1;
        }
    }
    return count;
}

//9.findNum(num)
function findNum(num) {
    let i = 0, sum = 0; 
    while (sum <= num) {
        i += 1; 
        sum += i; 
    }
    return i-1;
}

//arrow
let findNum = (num) => {
    let i = 0, sum = 0; 
    while (sum <= num) {
        i += 1; 
        sum += i; 
    }
    return i-1;
}

//10. Doi km cm mm dm 
function kmConverter(value, from) {
    if (from === "m") { return value*0.001}
    if (from === "dm") { return value*0.0001}
    if (from === "cm") {return value*0.00001}
    if (from === "mm") { return value * 0.000001 }
    return value;
}

function sum(val1, unit1, val2, unit2) {
    let valueSum = kmConverter(val1,unit1) + kmConverter(val2,unit2);
    if (unit1 === "m") { valueSum = valueSum*1000}
    if (unit1 === "dm") { valueSum = valueSum*10000}
    if (unit1 === "cm") {valueSum = valueSum*100000}
    if (unit1 === "mm") { valueSum = valueSum * 1000000}
    return valueSum + unit1;
    
}
//arrow
let kmConverter = (value, from) => {
    if (from === "m") { return value*0.001}
    if (from === "dm") { return value*0.0001}
    if (from === "cm") {return value*0.00001}
    if (from === "mm") { return value * 0.000001 }
    return value;
}

let sum = (val1, unit1, val2, unit2) => {
    let valueSum = kmConverter(val1,unit1) + kmConverter(val2,unit2);
    if (unit1 === "m") { valueSum = valueSum*1000}
    if (unit1 === "dm") { valueSum = valueSum*10000}
    if (unit1 === "cm") {valueSum = valueSum*100000}
    if (unit1 === "mm") { valueSum = valueSum * 1000000}
    return valueSum + unit1;
}
