// Sigle Threaded Synchronous = 1.Single-threaded → only one task runs at a time
// 2.Synchronous → tasks run in sequence, and each task must finish before the next starts


console.log("hello");
setTimeout(()=>{
    console.log("Time is out  execution");
},5000);
setTimeout(()=>{
    console.log("execution next");
},6000);
console.log("i am the end");

let arr = [100,70,80,90,60];
arr.push(17);
console.log(arr);

function hello(){
    console.log("hello Api creation");
}

hello();
