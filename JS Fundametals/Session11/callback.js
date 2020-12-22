/*function taskOne() {
    console.log("task1")
}

function taskTwo() {
    console.log("task2")
}
setTimeout(taskOne, 2000);*/

/*JavaScript runs code sequentially in top-down order. 
However, there are some cases that code runs(or must run) 
after something else happens and also not sequentially.
This is called asynchronous programming.*/


const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);


 
setTimeout(() =>{  
    console.log("This message is shown after 3 seconds");
}, 3000);




function func(param) {
    param("Hello it's me...")
}

function callback(param1) {
    console.log("Message:", param1)
}

func(callback);




