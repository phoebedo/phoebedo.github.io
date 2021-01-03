//tinh trung binh cong cua tat ca cac phan tu trong mang
let arr = [1, 2, 3, 4, 5, 6]; 
function mean(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length; 
}

//tim index cua mot so trong mang 
function indexOf(value) {
    for (let i = 0; i < arr.length; i++){
        if (value = arr[i]) {
            return i;
        }
    }
    return -1; 
}

//sao chep 1 mang so 
function copy(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return arr; 
}

//tim max of mang 
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max; 
}


//swap 
function (arr, pos1, pos2) {
    let temp = arr[pos2]; 
    arr[pos2] = arr[pos1];
    arr[pos1] = temp;
}


//tim so lon thu hai trong mang 
let arr = [1, 2, 4, 5, 5, 7, 7, 7]; 
function secondLargest(arr) {
    let second = arr[arr.length - 1]
    for (i = arr.length - 1; i >= 0; i--){
        if (second > arr[i]){
            second = arr[i];
            break;
        }
    }
    return second;
}
//tim so lon thu hai trong mang 
let arr = [1, 2, 4, 5, 5, 7, 7, 7,8,8,8,8,8]; 
function thirdLargest(arr) {
    let count = 0; 
    let third = arr[arr.length - 1]
    for (i = arr.length - 1; i >= 0; i--){
        if (third > arr[i]){
            third = arr[i];
            count += 1; 
        }
        if (count == 2) {
            break;
        }

    }
    return third;
}
//tim so lan xuan hien lon nhat cua phan tu trong mang 
let arr = [1, 2, 3, 4, 4, 5, 5, 5, 4, 6, 4]; 
function occurrence(arr) {
        return arr.sort((a,b) =>
              arr.filter(elem => elem===a).length
            - arr.filter(elem => elem===b).length
        ).pop();
}

//Cut chuoi thanh mang co do dai chi dinh 
//Tach chuoi thanh mot mang cac chuoi con 
//Loai bo so trung lap trong mang 
function removeDuplicates(arr) {
    let newArr = []; 
    for (let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr; 
}
//Tra ve 1 mang luu day so Fib tu 0=> n
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
//Tra ve 1 mang bao gom cac so trung nhau cua 2 mang
function intersection(arr1, arr2) {
    let result = arr1; 
    for (let i = 0; i < result.length; i++){
        if (!arr2.includes(result[i])) {
            result.splice(i);
        } 
    }
    return result;   
}
//Tra ve 1 mang gom cac so khong trung nhau cua 2 mang 
//Viet ham loai bo cac gia tri false khoi mang
let arr = [null, NaN, 1, 2,true,{},undefined]; 
arr.filter(value => !!value);
//Viet ham sap xep mang user tang dan theo age
let user = [{ name: "Thao1", age: 18 }, { name: "Thao2", age: 21 }, { name: "Thao3", age: 15 }]; 
user.sort((obj1, obj2) => obj1.age - obj2.age);

// DATE TIME 
let date = new Date();

//Viet ham in ra thu viet tat tuong ung voi ngay hien tai
let date = new Date(); 
let day = date.getDay();
if (day == 0) {
    console.log("CN"); 
}
if (day == 1) {
    console.log("T2"); 
}
if (day == 2) {
    console.log("T3"); 
}
if (day == 3) {
    console.log("T4"); 
}
if (day == 4) {
    console.log("T5"); 
}
if (day == 5) {
    console.log("T6"); 
}
if (day == 6) {
    console.log("T7"); 
}


//Tra vao so ngay trong thang bat ki, nam va thang la tham so truyen vao 
function numOfDaysInMon(y, m) {
    let date = new Date(y, m, 0); 
    return date.getDate()
}
numOfDaysInMon(2020, 02); 

//Viet ham tinh so ngay 
function countDownToNY() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 01);
    return newYear.getTime() - today.getTime();
    
}
function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
convertMS(countDownToNY());
