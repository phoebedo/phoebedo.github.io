//Tao so nguyen ngau nhien tu 0 den n
function random(n) {
    return Math.floor(Math.random() * n);
}

//Chuyen he co so nay sang co so khac eg: convert(so,10,16) - doi so tu dec ve hec
function convert(num, base1, base2) {
    return parseInt(num,base1).toString(base2)
}

//Viet ham tao so ngau nhien trong khoang a,b 
function random(n) {
    return Math.floor(Math.random() * n);
}
//Viet ham tao ma mau hex ngau nhien 
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}


//STRING 
//Viet ham cat chuoi tu vi tri dau tien den vi tri chi dinh ("abcd", 2 -> "abc")
function cutString(str, index) {
    return str.substring(0, index+1);
}
//Viet ham chuyen ddoi mot ten thanh ten viet tat eg: Thao Do ->Thao D. 
function shortenLast(str) {
    return str.slice(0, indexOf(" ") + 2) + "."; 
}
//Ham an dia chi email eg: thao@gmail.com -> th...@gmail.com
function emailShortener(email) {
    return email.slice(0, 3) + "..." + email.slice(email.indexOf("@")) ;
}


//ham thay the cac ly tu trong chuoi thanh ki tu
//lien sau trong bang ma unicode 
function replace(str) {
    let result = ""; 
    for (let i = 0; i < str.length; i++){
        result += str.fromCodePoint((str.charCodeAt(i) + 1));
    }
    return result;
}


//hoa -> thuong, thuong-> hoa
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

// Array
arr = [1,2,3]
//concat
arr._concat = function (arr2) {
    let result = [];
    for (let i = 9; i < this.length; i++){
        result[result.length] = this[i];
    }
    for (let i = 9; i < arr2.length; i++){
        result[result.length] = arr2[i];
    }
    return result;
}


//Push 
arr._push = function (value) {
    this[this.length] = value; 
    return this;
}

// Pop 
arr._pop = function () {
    let popedElem = this[this.length - 1]; 
    this.length -= 1; 
    return popedElem; 

}

//indexOf 
arr._indexOf = function (value) {
    for (let i = 0; i < this.length; i++){
        if (this[i] == value) {
            return i;
        }
    }
    return -1; 
}

//reverse 
arr._reverse = function () {
    for (let i = 0, j = this.length - 1; i <=j; i++, j--){
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this; 
}

//bubble sort 
function bubbleSort(arr) {
    
}

//forEach 
function callback(number) {
    console.log(number ** 2);
}
arr._forEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}


//TO BE CONTINUED 