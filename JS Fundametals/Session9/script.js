alert("hello");

var name = "Thao";
let age = 22, hair = "black"; 
const gender = "female";
let greeting = `Hello, I'm  ${name} and I am ${age} years old`;
alert(name);


let a = Number(prompt("Enter number a:"));
let b = Number(prompt("Enter number b:"));
console.log(`a+b= ${a + b}`);
console.log(`a/b= ${a / b}`);
console.log(`a*b= ${a * b}`);
console.log(`aMODb= ${a % b}`);
console.log(`a to the power of b= ${a ** b}`);


let num = +prompt("Number:");
if (num%2==0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

let n1 = +prompt("First num:");
let n2 = +prompt("First num:");
if (n1 >= n2) {
    console.log("Bigger num:",n1);   
}
else {
    console.log("Bigger num:",n2);   
}


let m = +prompt("Enter month:");
if (m == 1 || m == 2|| m == 3) {
    console.log("Spring");
}
if (m == 4 || m == 5|| m == 6) {
    console.log("Summer");
}
if (m == 7 || m == 8 || m == 9) {
    console.log("Fall");
}
if (m == 10 || m == 11 || m == 12){
    console.log("Winter");
}
else{
    console.log("Month doesn't exist");
}



