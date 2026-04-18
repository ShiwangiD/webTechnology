// Scope :===  Scope decides where your variables are visible and where they are not.

// 1.Global Scope :== A variable declared outside all functions (Accessible everywhere in the code).

// let a=20;
// function ab(){
//     console.log(a);
// }
// ab();
// console.log(a);

//2. Functional Scope :==  Variables declared inside a function(Only accessible inside that function).


// function f1(){
//     let b=30;
//     console.log(b);
// }
// f1();

// console.log(b); // error

// 3.Block Scope :== Variables inside { } (using let or const and Only accessible inside that block).

// if(true){
//     let c=40;
//     console.log(c)
// }
// console.log(c);// error

// 4.Lexical Scope (Nested Scope) :== Inner function can access outer function variables(Inner function can use outer function variables).

// let d=70;
// function f2(){
//     let d = 60;
//     console.log(d);
//     function f3(){
//         let d=50;
//         console.log(d);
//     }
// }
// f2();

// function createCounter(){
//     function increament(){
//         console.log("I am increamenting function");
//     }
//      increament();
// }
// createCounter();



// Closure :== A function remembers that variable from its outer scope even after the outer function is finished executing.
//Closure = function + memory of outer variables.

function createCounter(){
    let count = 0;
    function increament(){
        count++;
        return count;
    }
     return increament;
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



function createBankAccount(){

let balance=500;
const user={
    
    deposite:function(amount){
        if(typeof amount === "number" && amount>0){
            balance+=amount;
            return balance;
        }
    },

    withDraw:function(amount){
        if(typeof amount === "number" && amount>0 && this.balance>=amount){
            balance-=amount;
            return balance;
        }
    },

    getBalance:function(amount){
            return balance;
        }
    }
    return user;
}

const customer = createBankAccount();
console.log(customer);
console.log(customer.deposite(400));
console.log(customer.getBalance(400));


// Higher Order function :===  A higher-order function is a function that:
// 1. takes another function as an argument, OR
// 2.returns another function


// function double(){
//     function execute(){
//         console.log("Hello");
//     }
//     return execute;
// }
// const execution = double();
// execution();



function double(value){
    return function execute(num){
        return num*value;
    }
}
const n = double(20);
console.log(n(5));







