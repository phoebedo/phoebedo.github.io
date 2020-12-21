//Bang cuu chuong
function multiplicationTable(){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <=10; j++){
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
multiplicationTable();

//Bang cuu chuong level dai hoc 
function multTabl() {
    let result = '*';
    for (let i = 0; i < 11; i++) {

        for (let j = 0; j < 11; j++) {

            if(i == 0 && j > 0){
            result += '[' + j + ']';
            } 
            else if(j == 0 && i>0){
            result += '[' + i + '] ';
            } 
            else if (i > 0 && j > 0) {
                result += (i * j) + ' ';
                if (i*j < 10) {
                    result = String(result).padStart(1, '0');
                }
            }
        }   
        result += '\n'
    }

console.log(result);
}

// Fizz Buzz
 for (let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i}: Fizz`);
    }
    if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i}: Buzz`);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}: FizzBuzz`);
    }
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(`${i}: BizzFuzz`);
    }
}   

//Boi chung 3,5 
function getCommMultSum() {
    let sum = 0;
    for (let i = 0; i <= 1000; i++){
        if (i % 15 == 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum = ",sum);
}
getCommMultSum();

//Prime
function isPrime(n) {
    if (n === 0 || n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Primes from 0 to 1000
function printPrime() {
    console.log("Cac so nguyen to trong khoang 0 den 1000 gom:")
    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }     
}

//Primes from a to b 
function primeInInterval(a, b) {
    console.log(`Cac so nguyen to trong khoang ${a} den ${b} gom:`)
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

//Bang cuu chuong nguoc
function multiplicationTable(){
    for (let i = 10; i >0; i--){
        for (let j = 10; j >0; j--){
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
multiplicationTable();

//First-Last Digit
function getFirstLast(num) {
    let last = num % 10;
    let first = num;
    while (first >= 10) {
        first = (first - (first % 10)) / 10;
    }
    console.log(`First digit is ${first}, last digit is ${last} `);
}
getFirstLast(12345);

//Fibonacci
function getFib(term) {
    if (term == 1) {return 0;}
    if (term == 2) {return 1;}
    else {
        return getFib(term - 1) + getFib(term - 2);
    } 
}
function printNTerms(n) {
    console.log(`First ${n} term(s) of Fibonacci Sequence:`);
    for (let i = 1; i <= n; i++){
        console.log(getFib(i));
    }
}

//Non-recursive
function printNFib(n) {
    let f1 = 0, f2 = 1;
    let term = 1;
    if (n == 1) { 
        console.log(`First ${n} term(s) of Fibonacci Sequence:`);
        console.log(f1)
    }
    else {
        console.log(`First ${n} term(s) of Fibonacci Sequence:`);
        while (term <= n) {
            console.log(f1);
            let fth = f1 + f2;
            f1 = f2;
            f2 = fth;
            term += 1;
        }
        
    }
}

//GCD LCM
function getGCD(a,b){
    if (b == 0) { return a};
    return getGCD(b, a % b);
}
function getLCM(a, b) {
    return Math.abs(a*b/getGCD(a,b))
}

//Non-recursive 
function findGCD(a, b) {
    let r; 
    while (b != 0) {
        rmd = a % b; 
        a = b; 
        b = r; 
    }
    return a;
}

//Palindrome
function isPalindrome(num) {
    let rev = 0, tmp = num;
    while (tmp>0) {
        let lastDig = tmp % 10;
        rev = (rev * 10) + lastDig;
        tmp = (tmp-tmp%10)/10;
    }
    if (rev == num) { return true; }
    return false;
}

//Amstrong
function isAmstrong(num) {
    let sum = 0, tmp = num, p = num.toString().length; 
    while (tmp>0) {
        let r = tmp % 10;
        tmp = (tmp-tmp%10)/10;
        sum += r ** p;
    }
    if (sum == num) { return true; }
    return false;
   
}
//Perfect 
function isPerfect(num) {
    let sum = 0; 
    for (let i = 1; i < num; i++){
        if (num % i==0) {
            sum += i;
        }
    }
    if (num == sum) { return true; }
    return false;
}
