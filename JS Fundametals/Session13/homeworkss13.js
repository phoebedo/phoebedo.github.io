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
//Viết hàm arr._sort(arr, callback) thực thi code giống như hàm sort() - Bubble Sort truoc da nhe thay. Tim Sort dang bi' aj :(
function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        let swap = 0;
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = 1;
            }
        }
        if (swap = 0) {
            break;
        }
    }
    return arr; 
}
bubbleSort([1, 3, 2, 4, 7, 10, 23, 12, 54, 32,101,32,123]);   
//Viết hàm arr._forEach(arr, callback) thực thi code giống như hàm forEach()
let arr = [1, 2, 3]; 
arr._forEach = function (callback) {
    let result = []; 
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i]));
    }
    return result;
}
arr._forEach((i) => i**2); 
//Viết hàm arr._filter(arr, callback) thực thi code giống như hàm filter()
let arr = [
    { name: "Ba", age: 29 },
    { name: "Bon", age: 3 },
];

arr._filter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (callback(this[i])) {
            result.push(this[i]); 
        }
    }
    return result
    
}
arr.filter(callback); 
//Viết hàm arr._map(arr, callback) thực thi code giống như hàm map() - eg.#3
let arr = ["abc", "def"]; 
function callback(str) {
    return str.toUpperCase() ;
}
arr._map = function (callback) {
    let result = []; 
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i]))
    }
    return result; 
}
arr._map(callback); 
//Viết hàm arr._reduce(arr, callback) thực thi code giống như hàm reduce()
let arr = [1, 2, 3, 4, 5, 6]; 

arr._reduce = function (callback, initial) {
    let accum = initial; 
    for (let i = 0; i < this.length; i++){
        accum = callback(accum,this[i])
    }
    return accum;
}
arr._reduce((sum,i)=> sum+=i, 0); 

//MORE METHODS 
//every() -> whether all elements in the array satisfy the test implemented by the callback function.
//returns a Boolean value. Example: 
[1, 2, 3, 4, 5, 6, 7, 8, 9].every((value) => value < 10) //return true

//flat() -> creates a new array with all 
//sub - array elements concatenated into it recursively up to the specified depth.
//parameter = desired depth : array.flat([depth])
let arr = [1, 2,[[[3, 4]]]]; 
console.log(arr.flat());  // [1,2,3,4]
console.log(arr.flat(2));// [1,2,[3,4]]

//fill() ->changes all elements in an array to a static value, 
//from a start index(default= 0) to an end index(default= array.length).
//It returns the modified array: arr.fill(value, start_index, end_index)
let arr = [1, 2, 3, 4];

// fill with 3 from position 2 until position 4
console.log(arr.fill(3, 2, 4));
// [1, 2, 0, 0]

// fill with 5 from position 1 (ne end index specified -> from 1 to arr.length)
console.log(arr.fill(5, 1));
// [1, 5, 5, 5]

console.log(array1.fill(6)); 
// [6, 6, 6, 6]

//find() method returns the value of the FIRST element of an array 
//that satisfies the provided testing function.
//If no values satisfies the testing function, undefined is returned.
let arr = [1, 23, 14, 25, 12, 42, 54, 87]; 
console.log(arr.find((elem) => elem >= 40)); 
// 42
