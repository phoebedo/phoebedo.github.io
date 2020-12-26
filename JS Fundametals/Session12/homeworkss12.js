//weapon
function Weapon(name, damage) {
    this.name = name;
    this.damage = damage;    
}
//Player
function Player(name, level, weapon,damage) {
    this.name = name; 
    this.level = level;
    this.weapon = new Weapon(weapon, damage);
    this.attack = function () {
        console.log(this.weapon.damage * this.level);
        return this;
    };
    this.changeWeapon = function (wpn, dmg) {
        this.weapon = new Weapon(wpn, dmg);
        return this; 
    };
}
let player1 = new Player("player1", 155, "weapon1", 100);
let player2 = new Player("player2", 105, "weapon2", 120);
let player3 = new Player("player3", 15, "weapon3", 50);
player1.attack(); 
player1.changeWeapon("weapon2", 120);

//Calculator
function Calculator() {
    this.get = function (a, b) {
        this.a = a; 
        this.b = b;
        return this;
    };
    
    this.add = function () {
        console.log(this.a + this.b); 
        return this;
    };
    this.sub = function () {
        console.log(this.a - this.b);
        return this;
    };
    this.div = function () {
        console.log(this.a / this.b);
        return this;
    };
    this.mul = function () {
        console.log(this.a * this.b);
        return this;
    };
    this.rem = function () {
        console.log(this.a % this.b);
        return this;
    }; 
    this.exp = function () {
        console.log(this.a ** this.b);
        return this;
    };
    
}
let cal = new Calculator; 
cal.get(4, 5).add().div().exp();


//Counter
function Counter(count = 0){
    this.count = count; 
    this.up = function () {
        this.count += 1;
        return this;
    };
    this.down = function () {
        this.count -= 1;
        return this;
    };
    this.get = function () {
        console.log(this.count);
        return this;
    };
}
let c = new Counter; 
c.up().up().down().up().get()

//Girl 
function Girl(name,dob,job,add) {
    this.name = name;
    this.dob = dob;
    this.job = job;    
    this.add = add;
    this.sleep = function () {
        console.log("zZzZzZz....");
    };
    this.eat = function () {
        console.log("chomp chomp chomp");
    };
}
let thao = new Girl ("Thao", "05/15/99", "student", "119TDH");
thao.eat();
thao.sleep();

function Boy(name, dob, job, add) {
    this.name = name;
    this.dob = dob; 
    this.job = job; 
    this.add = add;
    this.sleep = function () {
        console.log("zZzZzZz....");
    };
    this.eat = function () {
        console.log("champ champ champ");
    }; 
    this.playGame = function () {
        console.log ("Playing game...")
    }
}

let boy = new Boy("Boy", "09/20/95", "manager", "Mich");
boy.sleep();
