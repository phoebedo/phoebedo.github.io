//Chu vi dien tich chu nhat
let width = +(prompt("Chieu rong: "));
let height = =(prompt("Chieu cao: "));
console.log("Chu vi: ", 2*(width + height));
console.log("Dien tich: ", width * height);          

//Chu vi dien tich hinh tron
let r = +prompt("Ban kinh hinh tron: ")
console.log("Chu vi: ", 2*Math.PI*r);
console.log("Dien tich: ", Math.PI * r * r);   

//Nghiem PT bac 1
let a = +(prompt("a: "));
let b = +(prompt("b: "));
if (a == 0 && b==0) {
    console.log("Phuong trinh nghiem dung voi moi x");
}
if (a == 0 && b != 0) {
    console.log("Vo nghiem")
}
if (a!=0){
    console.log("Phuong trinh co 1 nghiem x= ", -b/a)
}

//Doi cm mm m km
let num = +prompt("Nhap so (cm): ");
console.log(`${num} cm = ${num*10} mm`);
console.log(`${num} cm = ${num / 100} m`);
console.log(`${num} cm = ${num / 100000} km`);

// Doi C F K 
let c = +prompt("Nhap nhiet do o don vi Celsius: ");
console.log(`${c}C = ${(c * 9/5) + 32}F`);
console.log(`${c}C = ${c + 273.15}K`);

//Tinh gio phut
let mins = +prompt("Nhap so phut: ");
console.log(`${Math.floor(mins / 60)} gio ${mins % 60} phut `);


//Max of 3
let n1 = +prompt("Nhap so thu nhat: ");
let n2 = +prompt("Nhap so thu hai: ");
let n3 = +prompt("Nhap so thu ba: ");
if (n1 >= n2 && n1 >= n3) {
    console.log("So lon nhat:", n1)
}
if (n2 >= n1 && n1 >= n3) {
    console.log("So lon nhat:", n2)
}
if (n3 >= n1 && n3 >= n1) {
    console.log("So lon nhat:", n3)
}

//Chia het cho 5 va 11
let n = +prompt("Nhap so n=");
if (n % 5 == 0) {
    console.log("Chia het cho 5")
}
if (n % 11 == 0) {
    console.log("Chia het cho 11")
}

//Nam nhuan
let year = +prompt("Nhap nam:");
if (year % 4 == 0) {
    console.log(`${year} la nam nhuan`);
}
else {
    console.log(`${year} khong phai nam nhuan`); 
}

//Ki tu thuoc bang chu cai
let char = prompt("Nhap mot ki tu");
if (/[a-z]/i.test(char)) {
    console.log(char + " thuoc bang chu cai");
}
else {
    console.log(char + " khong thuoc bang chu cai");
}

//Kiem tra nguyen am phu am 
let char = prompt("Nhap mot ki tu chu cai");
if (/[aeiou]/i.test(char)) {
    console.log("Nguyen am");
}
else {
    console.log("Phu am")
}

//Chu thuong chu hoa 
let char = prompt("Nhap mot chu cai");
let charLowerCase = char.toLowerCase();
if (char === charLowerCase) {
    console.log(char, "la chu thuong");
}
else {
    console.log(char, "la chu hoa");
}

// Tim nghiem cua phuong trinh bac 2
let a = +prompt("Nhap a: ");
let b = +prompt("Nhap b: ");
let c = +prompt("Nhap c: ");

if (a === 0) {
    if (b == 0 && c==0) {
        console.log("Phuong trinh nghiem dung voi moi x");
    }
    if (b == 0 && c != 0) {
        console.log("Vo nghiem")
    }
    if (b!=0){
        console.log("Phuong trinh co 1 nghiem x= ", -c/b)
    }  
 
}
else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phuong trinh vo nghiem")
    }
    if (delta == 0) {
        console.log("Phuong trinh co nghiem kep x1 = x2 = ", (-b) / (2 * a));
    }
    else{
        console.log("Phuong trinh co 2 nghiem x1= " + (-b - Math.sqrt(delta)) / (2 * a) + "va x2= " + (-b + Math.sqrt(delta)) / (2 * a));
    }
}

//Doi diem so -> chu
let grade = +prompt("Nhap diem bang so: ");
if (grade<0 || grade >10) {
    console.log("Diem khong hop le");
}
else if (grade < 4) {
    console.log("Diem bang chu tuong duong: F");
}
else if (grade < 5.5) {
    console.log("Diem bang chu tuong duong: D");
}
else if (grade < 7.0) {
    console.log("Diem bang chu tuong duong: C");
}
else if (grade < 8.5) {
    console.log("Diem bang chu tuong duong: B");
}
else {
    console.log("Diem bang chu tuong duong: A");
}