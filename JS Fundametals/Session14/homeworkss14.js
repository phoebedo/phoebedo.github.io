//ARRAY
//Remove duplicate nums
let arr = [1, 2, 3, 4, 4, 5, 6, 7]; 
arr.filter((elem, pos) => arr.indexOf(elem) == pos); 

// Array of Fib 
function getFib(term) {
    if (term == 1) {return 0;}
    if (term == 2) {return 1;}
    else {
        return getFib(term - 1) + getFib(term - 2);
    } 
}
function arrFib(n) {
    let fib = []; 
    for (i = 1; i <= n; i++){
        fib.push(getFib(i));
    }
    return fib; 
}
arrFib(5); 

// Intersection of 2 arrays 
let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [3, 4, 5, 6, 7, 8]; 
arr1.filter((elem) => arr2.includes(elem)); 

// symmetric difference of 2 arr 
let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [3, 4, 5, 6, 7, 8]; 
arr1.filter((elem) => !arr2.includes(elem))
    .concat(arr2.filter((elem) => !arr1.includes(elem))); 

//Sort integers 
let arr = [1, 3, 5, 7, 2, 4, 5, 9, 10, 235, 241, 56, 86, 125]; 
function sort(arr) {
    for (let i = 1; i < arr.length; i++){
        key = arr[i]; 
        let j = i - 1; 
        while (j > 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j -= 1; 
        }
        arr[j + 1] = key; 
    }
    return arr;
}
sort(arr); //or: arr.sort((a,b)=>a-b)

//sort array of strings 
arr = ["banana", "strawberry", "apple", "blueberry", "grapefruit"];
function sort(arr) {
    for (let i = 1; i < arr.length; i++){
        key = arr[i]; 
        let j = i - 1; 
        while (j > 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j -= 1; 
        }
        arr[j + 1] = key; 
    }
    return arr;
}
sort(arr);  //Or: arr.sort();

//Sort by obj's age- nondecreasing order 
let user = [{ name: "Thao1", age: 18 }, { name: "Thao2", age: 21 }, { name: "Thao3", age: 15 }]; 
user.sort((obj1, obj2) => obj1.age - obj2.age);

//sort by obj' name.length 
let user = [{ name: "Thao", age: 18 }, { name: "Phoebe", age: 21 }, { name: "Bee", age: 15 }]; 
user.sort((obj1, obj2) => obj1.name.length - obj2.name.length);

//sort by user name 
let user = [{ name: "Thao", age: 18 }, { name: "Phoebe", age: 21 }, { name: "Bee", age: 15 }]; 

user.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

//Sum of two = target 
let arr = [4, 2, 5, 6, 9];
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (arr.includes(complement)) {
            return [arr[i], complement]; 
        }
    } 
    return []; 
}
twoSum(arr, 9); 

//random an elem in arr 
let arr = [4, 2, 5, 6, 9];
let randomArr = (arr) => arr[Math.floor(Math.random() * arr.length)]; 
randomArr(arr);

//Shuffle array 
let arr = [4, 2, 5, 6, 9];
function shuffle(arr) {
    for (let i = arr.length - 1; i >0; i--){
        let r = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp; 
    }
    return arr;
}
shuffle(arr);

// 2->1 dimension  
let arr = [1, 2, [3, 4], 5];
function flatten(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++){
                result.push(arr[i][j]);
            }
        }
        else {
                result.push(arr[i]);
        }
    }
    return result;
}
flatten(arr);  //Or: arr.flat();

//n -> 1 dimension
let arr = [1, 2, [3, 4], 5,[[6,7]]];
function flatten(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
flatten(arr); //OR arr.flat();

//array- square 
let arr = [1, 2, 3, 4];
arr.map((i) => i ** 2);

//to upper case 
let arr = ["hello", "how", "are", "you"];
arr.map((i) => i.toUpperCase());

//type = number 
let arr = ["hello", "how", "are", "you",3,4,5];
arr.filter((i) => typeof (i) == "number");


//array of obj
let obj = [{ name: "Thao do", age: 18 }, { name: "phoebe Do", age: 21 }, { name: "Baby Boo", age: 15 }]; 
//age>20
obj.filter((obj) => obj.age > 20);
//capitalize names 
obj.map((obj) => {
    let split = obj.name.split(" ");
    for (let i = 0; i < split.length; i++){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1); 
    }
    return split.join(" ");
})
//shorten names 
obj.map((obj) => obj.name.slice(0, obj.name.indexOf(" ") + 2) + ".")
//new arr with names only
obj.map((obj) => obj.name);


//DATE -TIME 
//1. date/time validity
function isValidDate(d) {
    let date= new Date(d)
    return date.getTime() === date.getTime();
}
isValidDate("date");
isValidDate("2020/12/30");  


// T2 T3-CN (done in class)
// n day before 
function turnBackTime(n) {
    return new Date(new Date().setDate(new Date().getDate()-n))
}
turnBackTime(100); 

//days in month - Done in class
// sec in day 
function secs() {
    let now = new Date();
    return now.getSeconds() + (60 * now.getMinutes()) + (60 * 60 * now.getHours());
}
secs();

//count down to New Year - Done in class 
//isWeekend
function isWeekend(y, m, d) {
    let date = new Date(y, m, d);
    if (date.getDay() == 6 || date.getDay() == 0) {
        return "Weekend!Yayyyyy"
    }
    return "Not weekend :(" 
}
isWeekend(2020, 12, 27);
isWeekend(2020, 12, 08); 

//Quarter 
function getQuarter(y,m, d) {
    let mon = new Date(y, m, d).getMonth();
    return mon < 3 ? "Q1" : mon < 6 ? "Q2" : mon < 9 ? "Q3" : "Q4"; 
}
getQuarter(2020, 06, 40); 

//days passed 
function daysPassed() {
    let today = new Date; 
    return `${Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / (1000 * 60 * 60 * 24))} day(s) of ${today.getFullYear()} have passed.`; 
}
daysPassed();

//age 
function age(y, m, d) {
    let dob = new Date(y, m, d);
    let today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() > dob.getMonth()) {
        return `${years} year(s) old`; 
    }
    if (today.getMonth() < dob.getMonth()) {
        return `${years - 1} year(s) old`; 
    }
    else {
        if (today.getDate() >= dob.getDate) {
            return `${years} year(s) old`; 
        }
        else {
            return `${years - 1} year(s) old`; 
        }
    }
}
age(1999, 05, 15);

//Date in Vnese style 
function dayVN() {
    switch (new Date().getDay()) {
        case 0:
          return "CN";
        case 1:
          return "T2";
        case 2:
           return "T3";
        case 3:
          return "T4";
        case 4:
          return "T5";
        case 5:
          return "T6";
        case 6:
          return "T7";
      }
}
function date() {
    let now = new Date();
    return `${new Date().toLocaleTimeString("vi-VN")} ${dayVN()} ${new Date().toLocaleDateString("vi-VN")}`
}

date();

//days after 
function after(n) {
    return new Date(new Date().setDate(new Date().getDate()+n))
}
after(100); 
// hours in between 2 days 
function hours(y1,m1,d1,y2,m2,d2) {
    let day1 = new Date(y1, m1, d1),
        day2 = new Date(y2, m2, d2); 
    return `${Math.floor((day1.getTime() - day2.getTime()) / (1000 * 60 * 60))} hours `; 
}
hours(2020, 12, 25, 2020, 11, 11);

//date of monday of the week 
function monDate(y,m,d) {
    let current = new Date(y,m,d);
    let diff = current.getDay() - 1; 
    if (diff == -1) {
        return `Monday of this week is ${new Date(current.setDate(current.getDate() - 7)).toLocaleDateString("vi-VN")}`;
    }
    return `Monday of this week is ${new Date(current.setDate(current.getDate() - diff)).toLocaleDateString("vi-VN")}`; 
}

monDate(2020,1,23); 

// difference in time - 2 countries 
function getTimeZone(cap) {
    let capTimeZone;
    let capTimeZoneList
     = {
         uct_11: ["Alofi"] ,
         uct_10: ["Rarotonga"] ,
         uct_9: [] ,
         uct_8: ["Adamstown"] ,
         uct_7: [] ,
         uct_6: ["Belmopan", "San Jose", "San Salvador", "Guatemala City", "Tegucigalpa", "Mexico City", "Managua"] ,
         uct_5: ["Nassau", "Ottawa", "George Town","Bogota", "Havana","Quito","Port-au-Prince", "Kingston", "Panama", "Lima", "Cockburn Town", "Washington DC"],
         uct_4: ["Oranjestad", "Bridgetown", "Hamilton", "Sucre", "Road Town", "Roseau", "Santo", "Domingo", "Saint Georges", "Georgetown", "Brades", "San Juan", "Basseterre", "Castries", "Kingstown", "Port of Spain","Caracas"] ,
         uct_3: ["Buenos Aires", "Brasilia", "Santiago", "Stanley", "Nuuk", "Asuncion" , "Paramaribo", "Montevideo"] ,
         uct_2: ["King Edward Point"] ,
         uct_1: ["Praia"],
         uct0: ["Ouagadougou", "Yamoussoukro", "Banjul", "Accra", "Conakry", "Bissau", "Reykjavik", "Dublin", "Douglas", "Monrovia", "Bamako", "Nouakchott", "Lisbon", "Jamestown", "São Tomé", "Dakar", "Freetown", "Lomé", "London"] ,
         uct1: ["Tirana"," Algiers"," Andorra La Vella"," Luanda", "Vienna", "Brussels", "Porto Novo", "Sarajevo", "Yaoundé", "Bangui", "N'Djamena", "Brazzaville", "Kinshasa", "Zagreb", "Prague", "Copenhagen", "Malabo", "Paris", "Libreville", "Berlin", "Gibraltar", "Budapest", "Rome", "Pristina", "Vaduz", "Luxembourg", "Valletta", "Monaco", "Podgorica", "Rabat", "Amsterdam", "Niamey", "Abuja", "Skopje", "Oslo", "Warsaw San", "Marino", "Belgrade", "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Tunis"] ,
         uct2: ["Gaborone", "Sofia", "Gitega", "Nicosia", "North Nicosia", "Cairo", "Tallinn","Mbabane", "Helsinki", "Athens", "Jerusalem", "Amman","Riga", "Beirut","Maseru","Tripoli", "Vilnius", "Lilongwe", "Chișinău", "Maputo", "Windhoek", "Bucharest", "Kigali", "Pretoria", "Khartoum", "Damascus", "Kyiv", "Lusaka"] ,
         uct3: ["Manama", "Minsk", "Moroni", "Djibouti","Asmara","Addis Ababa","Baghdad","Nairobi","Kuwait City	","Antananarivo", "Doha", "Moscow", "Riyadh","Mogadishu","Juba", "Dodoma", "Ankara", "Kampala", "Sana"] ,
         uct4: ["Yerevan", "Baku", "Tbilisi","Port Louis", "Muscat","Saint-Denis","Victoria","Abu Dhabi"] ,
         uct5: ["Male", "Islamabad","Dushanbe","Ashgabat", "Tashkent", "New Delhi"] ,
         uct6: ["Dhaka","Thimphu","Nursultan","Bishkek"] ,
         uct7: ["Phnom Penh", "Jakarta","Vientiane", "Bangkok", "Hanoi"] ,
         uct8: ["Beijing", "Kuala Lumpur", "Ulaanbaatar", "Manila", "Singapore", "Taipei"] ,
         uct9: ["Tokyo", "Pyongyang", "Ngerulmud", "Seoul", "Dili"] ,
         uct10: ["Port Moresby"] ,
         uct11: ["Canberra", "Palikir", "Gizo", "Honiara", "Port Vila"] ,
         uct12: ["Tarawa", "Majuro", "Yaren", "Funafuti"] ,
         uct13: ["Suva", "Wellington", "Nukualofa"] ,
         uct14: ["Apia"],
};
    for (properties in capTimeZoneList
        ) {
        if (capTimeZoneList
            [properties].includes(cap)) {
            capTimeZone = properties; 
        }
    }
    switch (capTimeZone) {
        case "uct_11": return +(-11); 
        case "uct_10": return +(-10); 
        case "uct_9": return +(-9); 
        case "uct_8": return +(-8); 
        case "uct_7": return +(-7); 
        case "uct_6": return +(-6); 
        case "uct_5": return +(-5); 
        case "uct_4": return +(-4); 
        case "uct_3": return +(-3); 
        case "uct_2": return +(-2); 
        case "uct_1": return +(-1); 
        case "uct0": return +(0); 
        case "uct1": return +(1); 
        case "uct2": return +(2); 
        case "uct3": return +(3); 
        case "uct4": return +(4); 
        case "uct5": return +(5); 
        case "uct6": return +(6); 
        case "uct7": return +(7); 
        case "uct8": return +(8); 
        case "uct9": return +(9); 
        case "uct10": return +(10); 
        case "uct11": return +(11); 
        case "uct12": return +(12); 
        case "uct13": return +(13);
        case "uct14": return +(14); 
    }
}

function diff(cap1, cap2) {
    console.log(`Current time in ${cap1} is ${new Date(new Date().setHours(new Date().getHours()+ (getTimeZone(cap1))-7)).toLocaleString()}`);
    console.log(`Current time in ${cap2} is ${new Date(new Date().setHours(new Date().getHours()+ (getTimeZone(cap2))-7)).toLocaleString()}`)
    if (getTimeZone(cap1) > getTimeZone(cap2)) {
        console.log(`${cap1} is ${Math.abs(getTimeZone(cap1) - getTimeZone(cap2))} hour(s) ahead of ${cap2}`); 
    }
    else {
        console.log(`${cap1} is ${Math.abs(getTimeZone(cap1) - getTimeZone(cap2))} hour(s) behind ${cap2}`); 
    }
}

//set Interval 
let timer = setInterval(() => {
    console.log("I love you");
}, 1000); 


let time = setInterval(() => {
    console.log(new Date().toLocaleTimeString("vi-VN"));
}, 1000); 