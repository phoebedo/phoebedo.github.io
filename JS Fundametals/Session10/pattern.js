//patter 1
function patternOne(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str += "*";
        }

        console.log(str);
    }
}

//number
function patternOne(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str += i;
        }

        console.log(str);
    }
}

//inverse 
function patternOne(n) {
    for (let i = n; i >0; i--) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str += "*";
        }

        console.log(str);
    }
}
//inverse - number 
function patternOne(n) {
    for (let i = 1; i >0 n; i--) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str += i;
        }

        console.log(str);
    }
}

//Pattern 2
function patternTwo(n){
    for (let i = 1; i <= n; i++) {
        let str = " ";
        let star = "*";
        let result = str.repeat(n - i) + star.repeat(i);

        console.log(result);
    }
}
//2 not using repeat
function two(n) {
    let str = "";

    for(let i = 1; i <=n ; i++){
        for(let j = 1; j <= n; j++){
            if(i + j >= n+1){
                str += "*";
            }else{
                str += " "
            }
        }
        str += "\n"
    }
    console.log(str) 
}


//Pyramid - numbered 
//Pyramid - number 
function pyramidNumbered(n) { 
    for (var i = 1; i <= n; i++) {
        let str = "";
        let k = 1; //1/0 - star/space -> starspacestarspacestar
        for (let j = 1; j <= (2 * n - 1); j++) {   //
            if (j >= n + 1 - i && j <= n - 1 + i && k==1) {
                str += i;
                k = 0;
            }
            else {
                str += " ";
                k = 1;
            }
        }
        console.log(str);
    }
}
//Pyramid
function pyramid(n) { 
    for (var i = 1; i <= n; i++) {
        let str = "";
        let k = 1; //1/0 - star/space -> starspacestarspacestar
        for (let j = 1; j <= (2 * n - 1); j++) {   //
            if (j >= n + 1 - i && j <= n - 1 + i && k==1) {
                str += "*";
                k = 0;
            }
            else {
                str += " ";
                k = 1;
            }
        }
        console.log(str);
    }
}

//Inverse 
function pyramidInverse(n) { 
    for (var i = n; i >0; i--) {
        let str = "";
        let k = 1; //1/0 - star/space -> starspacestarspacestar
        for (let j = 1; j <= (2 * n - 1); j++) {   //
            if (j >= n + 1 - i && j <= n - 1 + i && k==1) {
                str += "*";
                k = 0;
            }
            else {
                str += " ";
                k = 1;
            }
        }
        console.log(str);
    }
}



//Shine bright like a Diamond
function diamond(n) {
    pyramid(n);
    pyramidInverse(n)
}

// 

