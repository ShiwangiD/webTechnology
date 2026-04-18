
// Array Destructure :==== Array destructuring in JavaScript is a way to extract values from an array and assign them to variables in a single line.

const arr1 = [20,30,70,80,80,50,10];
const [first,second,third] = arr1;
console.log(first,second,third);



// RestOperator :====  The rest operator in JavaScript is written as ... and is used to collect multiple values into a single array (or object).

const arr2 = ["lovely","dubey","shiwangi",24,true];
const [a,...num] = arr2;
console.log(a,num);


function show(...args){
    console.log(args);
}
show(1,2,3,4,5);

// Object destructuring and return an object 


const user={
    name:"lovely",
    age:24,
    city:"delhi"
}
const {...rest} = user;
console.log(rest);

// Spread Operator :===  It expands the array into individual values.


const c = [20,40,50,90,100];
const result = [...c];
console.log(c);


// Expresssion Function :== value store in variable 

const addNumber = function(num1,num2){
    return num1+num2;
}
console.log(addNumber(2,4));   // calling

// Arrow Function :==  = () => { }
    


const addTwo = () =>{
    console.log("hello world");
}

addTwo();// calling

const add = (num3,num4)=>{
    return(num3+num4);
}
console.log(add(3,8));

const noreturn = (d,e) => e+d;
console.log(noreturn(4,9));

const squareNo = (s) => s*s;
console.log(squareNo(7));

// if we have single parameter:==

const onePara = add => add+add;
console.log(onePara(4));


const user1 = () =>{
    const details={
        name:"lovely",
        age:24,
        city:"varanasi"
    }
    return details;
}
console.log(user1());


const user3 = () => {
    return{
        country:"India"
    }
}
console.log(user3());

//if i want to call object using one line function

const value = () => ({name:'sita',age:24});
console.log(value());

// immediate calling function IIFE:==

(function greet(){
    console.log("hello world");
})();


// call back function :=== function that is passed as an argument to another function and is executed later.

// function great(){
//     console.log("Today, Is Great day!");
// }
// function meet(){
//     console.log("meeeting ");
// }

// meet();great();

function great(){
    console.log("Today, Is Great day!");
}
function meet(callback){
    console.log("meeeting ");
    callback();
}

meet(great);


function flipCard(){
    console.log("We are reciving your delivery");
}


function blinkit(){
    console.log("we have started packing your order");
}


function zomato(){
    console.log("we have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has inilized`);
    console.log("payment is recive");
    callback();
    // zomato();
}
payment(500,zomato);
payment(600,blinkit);
payment(900,flipCard);

// GST :Government










