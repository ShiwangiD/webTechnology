// Object Destructuring :== 

let obj = {
    name : "lovely",
    city : "varanasi"
}
// let name = obj.name;
// let city = obj.city;
// console.log(name,city);

// short cut method 

let {name, city} = obj;
console.log(name,city);


// ArrayDesturcturing :== 

let arr = [ 1,"shikha",{name:"something"}];
let [item1, item2, item3] = arr;
console.log(item1, item2,item3);