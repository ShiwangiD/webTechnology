// Async & Await :=
// async Function := An async function always returns a Promise.
// await Keyword := await pauses execution inside an async function until the Promise resolves.



async function greet(){
    return "somi";
}
const response = greet();
// console.log(response);

response.then((data)=>console.log(data));


async function greet1(){

   return new Promise((reslove,reject)=>{
        reslove("som somi");
    })
}
const respone = greet1();
response.then((data)=>console.log(data));


async function greet2(){
    return "shiwangi";
}
 const response = greet2();
 response.then((data)=>console.log(data));

async function greet4() {
    return new Promise((resolve,reject)=>{
        resolve("som somi");
    })
    
}
const response = greet4();
response.then((data)=>console.log(data));

async function greet5(){
    return new Promise((reslove,reject)=>{
        reject("somi");
    })
}
const response = greet5();
response.then((data)=>console.log(data))
.catch((error)=>{
    console.log("Error:",error);
})


// fetch("http://api.github.com/users")
// .then((respone)=>respone.json())
// .then((data)=>console.log(data));

// const response = await fetch("http://api.github.com/users");
// const data = await response.json();
// console.log(data);

// console.log("helloooooo");

async function github(){
    console.log("hello world!");
    const response = await fetch("http://api.github.com/users");
    const data = await response.json();
    console.log(data);

}
github();
console.log("helloooo");
