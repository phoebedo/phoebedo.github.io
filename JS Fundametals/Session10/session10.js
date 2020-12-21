let sum = 0;
let num = prompt("Nhap so:");
while (!isNaN(num) && num != null) {
  sum += +num;
  num = prompt("Nhap so:");
}
console.log(sum);

// tinh tong 1-100

let sum = 0; 

for (let i = 1; i <= 100; i++){
    sum += i;
}

console.log(sum);


for (let i = 0, j = 10; i < j; i++, j--){
    console.log(`i= ${i}, j= ${j}`);
}


//tong0-10000
let sum = 0; 
for (let i = 0; i <= 10000; i++){
    sum += i;
}
console.log(sum);

//
let sum = 0; 
for (let i = 0; i <= 1000; i++){
    if(i%3==0&&i%2!=0){
        console.log(i);
        sum += i;
    }
    
}
console.log(sum);
//tong le chia het cho 3
let sum = 0; 
for (let i = 0; i <= 1000; i++){
    if(i%3==0&&i%2!=0){
        console.log(i);
        sum += i;
    }
   
}
console.log("sum=", sum);
//tong so chia het cho ca 3,5,7
let sum = 0; 
for (let i = 0; i <= 1000; i++){
    if(i%105==0){
        console.log(i);
        sum += i;
    }
    
}
console.log("sum=", sum);

//tong so, chia het cho 3 hoac 5 hoac 7
let sum = 0; 
for (let i = 0; i <= 1000; i++){
    if(i%3==0||i%5==0||i%7==0){
        console.log(i**2);
        sum += i**2;
    }
    
}
console.log("sum=", sum);

//Function - maxOfThree()

function maxOfThree() {
    let n1 = +prompt("Nhap so thu nhat:");
    let n2 = +prompt("Nhap so thu hai:");
    let n3 = +prompt("Nhap so thu ba:"); 
    let max = n1; 
    if (n2 >= n1) {
        max = n2;
        if (n3 >= n2) { max = n3 }
    }
    
    console.log("Max la", max);
}

//Kiem tra so nguyen to 
function isPrime() {
    let num = prompt("Nhap mot so:");
    if (num === 1) { return false;}
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
            break;
        }    
    }
    return true;    
}

// in ra cac so nguyen to trong khoang tu 0 den n, default n =100
function printPrime(n = 100) {
    for (let i = 1; i <= n; i++){
        if (isPrime(i)) {
            console.log(i, "La so nguyen to");
        }
    } 
}

