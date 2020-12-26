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
function generateGUID() {
    let result = "";
    for (let i = 0; i < 32; i++){
        result += String.fromCodePoint(Math.floor(Math.random() * (126 - 33 + 1) + 33)); 
    }
    return result; 
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