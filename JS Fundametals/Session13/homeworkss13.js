//STRING
//1. Capitalize
function capitalize(str) {
    let split = str.split(" ");
    for (let i = 0; i < split.length; i++){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1); 
    }
    return split.join(" ");
}
capitalize("It's the most wonderful time of the year")

//2. Parameterize
function parameterize(str) {
    let split = str.toLowerCase().split(" ");
    return str.toLowerCase().split(" ").join("-");
}
parameterize("merry xmas")

//3. Remove blank space  ---
function removeSpace(str) {
    return str.trim().replace(/ {2,}/g, " ");
}
removeSpace("   It's    the    most    wonderful  time of    the year    ");

//4. upper to lower and vice versa 
function upperLower(str) {
    let result = ""; 
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i].toLowerCase();
        }
    }
    return result; 
}
upperLower("HeLloWorLd!");

//5. multiply 
function multi(str, times=1) {
    return str.repeat(times);
}
multi("hello", 3);

//6. insert string
function insert(string, str, index) {
    return string.slice(0, index) + str + string.slice(index);
}
insert("ac", "b", 1);

//7. shorten string to specified length 
function shortener(str, index) {
    return str.slice(0,index) + "..."; 
}
shortener("abcdef", 2);

//8. count 
function count(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == char) {
            count += 1;
        }
    }
    return count;
}
count("hmmmmmmmmmm", "m"); 

//matching substrings containing more than 1 char.
function count(str, sub) {
    let regex = new RegExp(sub, 'g');
    return str.match(regex).length; 
}
count("How much wood would a woodchuck chuck if a woodchuck could chuck wood?", "wo");

//9. shorten sentence to specified num of words 
function shorten(str, words) {
    return str.split(" ").slice(0, words).join(" ");
}
shorten("It's the most wonderful time of the year",5)

//10. GUID 
//UUIDs must be of the form "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx", 
//where x is one of[0 - 9, a - f] M is one of[1 - 5], and N is[8, 9, a, or b]
function generateGUID() {
    let split = "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx".split('');
    for (let i = 0; i<split.length; i++){
        if (split[i] == "x") {
            split[i] = Math.floor(Math.random() * 16).toString(16);
        }
        if(split[i] == "M"){
            split[i] = Math.floor(Math.random() * 5 + 1);
        }
        if (split[i] == 'N') {
            split[i] = [8,9,'a','b'][Math.floor(Math.random() *[8,9,'a','b'].length)];
        }
    }
    return split.join(''); 
}
generateGUID();

//11. to next 
function replace(str) {
    let result = ""; 
    for (let i = 0; i < str.length; i++){
        result += String.fromCodePoint((str.charCodeAt(i) + 1));
    }
    return result;
}
replace("abc");

//TO BE CONTINUED boi vi thay chi bao hom nay la due cua phan string thoi ^^
//Cont'd
//Viết hàm arr._sort(arr, callback) thực thi code giống như hàm sort() - Skip 
//Viết hàm arr._forEach(arr, callback) thực thi code giống như hàm forEach()
let arr = [1, 2, 3]; 
function callback(number) {
    console.log(number ** 2);
}
arr._forEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}
arr._forEach(callback); 
//Viết hàm arr._filter(arr, callback) thực thi code giống như hàm filter()
let arr = [
    { name: "Ba", age: 29 },
    { name: "Bon", age: 3 },
];

function callback(obj) {
    if (obj.age > 20) {
        console.log(obj); 
    }
}
arr._filter = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i]); 
    }
    
}
arr.filter(callback); 
//Viết hàm arr._map(arr, callback) thực thi code giống như hàm map() - eg.#3
let arr = ["abc", "def"]; 
function callback(str) {
    console.log(str.toUpperCase()) ;
}
arr._map = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
arr._map(callback); 
//Viết hàm arr._reduce(arr, callback) thực thi code giống như hàm reduce()
let arr = [1, 2, 3, 4, 5, 6]; 
function callback(sum,num) {
    return sum+num; 
}
arr._reduce = function () {
    let sum = 0; 
    for (let i = 0; i < this.length; i++){
        sum = callback(sum,this[i])
    }
    return sum;
}
arr._reduce(callback); 

//MORE METHODS 
//1. every() -> whether all elements in the array satisfy the test implemented by the callback function.
//returns a Boolean value. Example: 
[1, 2, 3, 4, 5, 6, 7, 8, 9].every((value) => value < 10) //return true

//flat() method creates a new array with all 
//sub - array elements concatenated into it recursively up to the specified depth.
//parameter = desired depth : array.flat([depth])
let arr = [1, 2,[[[3, 4]]]]; 
console.log(arr.flat());  // [1,2,3,4]
console.log(arr.flat(2));// [1,2,[3,4]]
