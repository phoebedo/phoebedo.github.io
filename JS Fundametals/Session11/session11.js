//Arrow Function 

let power = (x, y) => x ** y;

//Prime
//Object 
let thao = {
    name: "Thao",
    age: 21,
    job: "student",
   
};

let mobile = new Object();  
mobile.brand = "iPhone";
mobile.version = "Ultra Pro Max Plus";
mobile.phoneNum = "18573471196"

//xoa thuoc tinh 
delete thao.name;


//
let obj = {}
let key = prompt("Nhap key:");
let value = prompt("Nhap value:")

while (!isNaN(key) && key != null) {
    obj[key] = value;
    console.log(obj);
    key = prompt("Nhap key: ");
    value = prompt("Nhap value:")
}

console.log(obj);