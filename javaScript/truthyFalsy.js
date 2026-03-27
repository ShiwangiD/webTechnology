// nullish opertaor :- false, undefine,null,0,-0,NAN, "" :== falsy
// anything which not falsy :== truthy

// let result= (true && true) ? "statement1" : "statement2";
// console.log(result);

let result1 = (false && true) ? "statement1" : "statement2";
console.log(result1);

// let con= (" " && 25) ? "statement1" : " statement2";
// console.log(con);

let con= (0) ? "statement1" : " statement2";
console.log(con);


let userName ="";
let password = "";
let result= (userName && password) ? ("sucessful login") : ("invalid username and password");
console.log(result);