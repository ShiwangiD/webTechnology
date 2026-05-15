// Array := In JavaScript, an array is a dynamic, ordered collection of elements that can store values of any data type, where each element is accessed using a zero-based index. Internally, JavaScript arrays are object-based and optimized for indexed access.
// typeof array is object.
// array are mutable (in change origional value );

// create array using Literal method 
// let arr = [10,20,30,40];
// console.log(arr);

// let arr2 = ["apple" ,"orange","mango", "lichi"];
// console.log(arr2);
// let arr3 =["lovely",23,"varanasi"];
// console.log(arr3);

// let arr4 = ["nikki", 2,3,["shikha","lovely"],"mango"];
// console.log(arr4);

// create array using array constructor :

// let arr5 = new Array(2,3,4,5,"shivanya");
// console.log(arr5); 

// let arr = [20];
// console.log(typeof arr);
// let arr1 = new Array(20);
// console.log(arr);
// console.log(arr1.fill(0));

// Indexing := start 0 

// let arr6 = [12,34,5,6,7,9];
// console.log(arr6[3]);
// console.log(arr6[0]);
// arr6[4] = 99;
// console.log(arr6);

// let arr7 = [1,2,3,4,5,6,7];
// for(let i=0;i<arr7.length;i++){
//     console.log(arr7[i]);
// }

// for(let ch of arr7){
//     console.log(ch);
// }
// for(let key in arr7){
//     console.log(key);
// }

// let arr = [2,3,4,56,7,6,"alpha","beta"];
// console.log(arr);
// let a = arr.push(999);
// console.log(arr, a , arr.length);

// arr.pop(999);
// console.log(arr);

// shift and unshift 
// arr.shift(3);
// console.log(arr);
// arr.unshift(2);
// console.log(arr);

// slice and splice

// arr.slice(1,3);
// console.log(arr);

// let newArr = arr.slice(3,3);
// console.log(newArr);
// arr.splice(3,5,99,55);
// console.log(arr);

// let arr2 =[5,6];
// let arr3 = ["lovely","nikki","shikha"];
// let newArr=arr.concat(arr2,arr3);
// console.log(arr);
// console.log(newArr);

// spread operator 

// let newArr1 = [...arr,...arr2,...arr3];
// console.log(newArr1);

// let fruit = ["mango","apple","lichi","guava"];
// // fruit.join();
// console.log(fruit);
// let test = fruit.join();
// console.log(test);
// console.log(typeof test);
// let test1=fruit.join(" & ");
// console.log(test1);

// let str = fruit.toString();
// console.log(fruit);
// console.log(str, typeof str);

// console.log(fruit.indexOf("lichi"));
// console.log(fruit.reverse());

// let heroes = ["spiderman",["hulk","som somi",["lovely"],"thor"]];
// console.log(heroes);
// console.log(heroes.flat(2));

// sort method :=

let arr = [10,5,2,1,7];
let heroes = ["spiderman","ironman","hulk","hawkeye","wanda"];
heroes.sort();
console.log(heroes);
arr.sort((a,b)=>{
    return a - b;

});
console.log(arr);

// map := Return a new array with the updated values,map() loops through an array and applies a function to every element.

// Notes := map is higher order function .

let arr = [5,6,7,8,9,2];
// arr.map(function(elem,index,arr){
//     console.log(elem,index,arr);

// })

// for-Each loop :=forEach() executes a function once for every element in the array.

 arr.forEach((elem)=>{
    return elem*2;
})
console.log(arr);


// filter := filter() goes through each element and keeps only those that satisfy a condition (true),It does not modify the original array.

let filterArr = arr.filter(
    (elem,indexedDB, arr)=>{
        return elem >5
})
console.log(filterArr);


// reduce := reduce() takes each element of the array and reduces it step by step into one final result (like a number, object, string, etc.).

let result = arr.reduce((preVal,currVal)=>{
    return preVal + currVal;
},20)
console.log(result);

let now = new Date();
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

let now1 = Date.now();
console.log(now1);
const dates =  new Date(0);
console.log(dates.toString);
