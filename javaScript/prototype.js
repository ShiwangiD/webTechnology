// prototype and classes :  1. Prototype := Every JavaScript object has an internal link to another object called its prototype.
// 2. classes := ES6 introduced the class.

const obj = {
    name:"shivi",
    age:"20",
    greet: function(){
        console.log("hey");
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.greet);


console.log(obj.hasOwnProperty("name"));
console.log(obj.toString());

const arr = [20,30,40];
console.log(arr.length);

const obJ = {
    account:"4656768798"
}
console.log(obj2.account);
obJ.__proto__ = obj;
console.log(obJ.name);


const obj1 = {
    name:"shivi",
    age:"20",
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

const obj2 ={
    name:"lovely",
    age:"23",
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

const obj3 = {
    name:"shikha",
    age:"21",
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}
console.log(obj1);
console.log(obj2);



class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`h1 ${this.name}`);
    }
}

// const person1 = new  Person("shivi",20);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.sayHi());

class Customer extends Person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account;
        this.balance;
    }

    checkBalance(){
        return this.balance;
    }
}

const c1 = new Customer("lovely",24,500000);
console.log(c1.name);
console.log(c1);

console.log(c1.checkBalance);