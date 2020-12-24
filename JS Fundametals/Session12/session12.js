let obj = {
    name: "Thao",
    age: 21,
    job: "Student",
};

for (let property in obj) {
    console.log(property + ":" + obj[property]);
}

function object(n) {
    n.name = "Phoebe";
}

object(obj);
obj.name
//Double Ex
let obj = {
    name: "Thao",
    age: 21,
    job: "Student",
};
function double(object) {
    for (let property in object) {
        if (typeof (object[property]) == "number") {
            object[property] **= 2;
        }
    }
}

double(obj); 

let cop = {};
Object.assign(copy, obj);

function copy(target,source) {
    for (let property in source) {
        target[property] = source[property];
        if (typeof (source[property]) == 'number') {
            target[property] **= 2;
        }
    }
}
copy(cop, obj);

//Method 
let obj = {
    name: "Thao", 
    hi() {
        console.log("Hello")
    },
    bye() {
        console.log("Bye bye")
    },
    intro() {
        console.log("Hi! My name is " + this.name)
    }
}


//this 
let user = {
    name: "Thao",
    age: 18, 
    hi() {
        console.log("Hi! My name is " + this.name)
    },
    getKeys() {
        for (let property in this) {
            console.log(property)
        }
    },
    getValues() {
        for (let property in this) {
            console.log(this[property])
        }
    }
}