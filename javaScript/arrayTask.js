//1. for an array with makes of students find the average masks of the entire class.

// let stu = [5,6,7,8,8];
// let sum = stu.reduce((acc,curr)=>{
//     return acc + curr;
// })
// let average = sum/stu.length;
// console.log(`sum = ${sum}`);
// console.log(`average = ${average}`);

// 2. create an array with the given length(n) and fill with 0.

// let n = 25;
// let arr = new Array(25).fill(0);
// console.log(arr);


//3. create an array with the given length (n) and store natural numbers from 1 to n.

let n = 25;
let arr = new Array(25).fill(0);
arr.forEach((item,index)=>{
    console.log(item, index)
    arr[index] = index + 1;
})
console.log(arr);

//4. Consider an array of mcu heroes([ironman,captain,black window,wanda,hulk,black panther]).
// a) Add spiderman at the end and thor at the start.
// b) Remove black window and add hawkeye in its place .
// c) check wheather captain is present in the array.

let heroes = ["ironman","captain","black window","wanda","hulk","black panther"];
heroes.push("spiderman");
console.log(heroes);
heroes.unshift("thor");
console.log(heroes);
heroes.splice(3,1, "hawkeye");
console.log(heroes);
console.log(heroes.includes("captain"));


//5.how to check if given thing is array or not ?  how to convert other datatypes to array? what if we try to convert an object into an array.

let test = 2;
console.log(Array.isArray(test));

let test1 = "shivi";
console.log(Array.from(test1));

// takes empty array.

//6. We have three variables a,b,c contains any number, b  contains any string, c contains any object, to convert an object into an array.

let a = 1;
let b = "shhjhk";
let c = {
    name : "lovely"
}
let d = [1,2,3];
console.log(Array.of(a,b,c,d));

// 7. check whether given  string is pallindrome or not .

// let str = "hello";
// let str2 = Array.from(str);
// console.log(str2);
// let result = arr.reverse();
// console.log(result);


let str = "ollo";
let revStr = str.split("").reverse().
join("")
if(str === revStr){
    console.log("plaindrome string");
}
else{
    console.log("not a palindrome string");
}

// 8. Capitalize the first letter of every word in a sentence.

let str3 = "hello how are you";
let newArr=str3.split(" ").map((elem)=>{
    console.log(elem.charAt(0).toUpperCase(),elem.slice(1))
})
let finalString=newArr.join(" ");
console.log(finalString);