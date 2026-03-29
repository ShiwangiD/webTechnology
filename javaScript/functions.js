//In JavaScript, a function is a block of reusable code that performs a specific task. 

// feature of functions :
// 1.Reusable – write once, use multiple times.
// 2.Encapsulated – keeps logic separate.

// 4 way of create a function


//1 := without parameter list & without return type.

function alpha(){
    console.log("without parameter and without return ");
    console.log("hello function ");
}
alpha();// function calling

//2. without parameter & with return type.

function alpha2(){
    return "lovely";
}
console.log(alpha2()); // calling function
let name = alpha2();
console.log(name); // store function in variable

// 3. with parameter & without return type 

function alpha3(name){
    console.log("hello",name);
}
alpha3(); // undefine value 
alpha3("shivi"); 



// 4.with parameter list & with return type or called block scope 

function alpha4(a,b){
    let sum = a+b;
    return sum;
}
console.log(alpha4(2,4));

let result = alpha4(5,6);
console.log(result);


// Function  Declaration (normal function):== declared with function keyword , can be hoisted

function greet(){
    console.log("hello");
}
greet();


// Function Expresssion :=== stored in variable ; not hoisted

const greet1 = function(){
    console.log("helloo");
}


// Arrow function(fat arrow function) :=== shorter Syntax, introduced in ES6

greet3 = ()=>{
    console.log("hellooo");
}

// Anonymous Function :=== A function without name ,often used in expressions

setTimeout(function (){
    console.log("hello")
},2000);

// IIFE(immediately invoked function Expression) :=== A function that runs as soon as it's defined

(function(){
    console.log("hello")
})();