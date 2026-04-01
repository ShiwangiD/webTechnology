// object :== An object is a collection of key–value pairs used to store related data and functionality.

let car = {
    brand : "lamborgini",
    color: "pink",
    maxSpeed: 180,
    stop: function(){
        console.log("stop the car");
    },
    start:function(){
        console.log("starting the car");
        return "start successful";
    }
    

 }
console.log(car);
console.log(car.brand);
console.log(car.start());
console.log(car["brand"]);

let person ={
    "name": "shiwangi",
    "full Name":"shiwangi dubey",
    "age": 23,
    "address":"varanasi"

}
console.log(person.name);
console.log(person["full Name"]);

//Constructor ke through object create 
let obj = new Object({
    name: "gaurangi"
});
obj.age = 2;
console.log(obj);

delete obj.age;
console.log(obj);

let obj ={
    name: "alpha",
    greet: function(){
        console.log(`hello i am ${this.name}`);
    }
}
obj.greet();

let keys = Object.keys(obj)
    console.log(keys);
    let values = Object.values(obj);
    console.log(values);

    for(let test in obj){
        console.log(test);
    }
    let obj2 = {...obj}
    console.log(obj2);

    

/* Singleton object == A singleton is just a single, unique object created once in your code.
 creating an object using literal syntax is considered a singleton because it create one specific object instance that is not used as a template to craete others*/

 


