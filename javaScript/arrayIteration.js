// map :===  Return a new array with the updated values,map() loops through an array and applies a function to every element.

// Notes := map is higher order function .

let arr = [5,6,7,8,9,2];
// arr.map(function(elem,index,arr){
//     console.log(elem,index,arr);

// })

// for-Each loop :== forEach() executes a function once for every element in the array.

 arr.forEach((elem)=>{
    return elem*2;
})
console.log(arr);


// filter :== filter() goes through each element and keeps only those that satisfy a condition (true),It does not modify the original array.

let filterArr = arr.filter(
    (elem,indexedDB, arr)=>{
        return elem >5
})
console.log(filterArr);


// reduce :== reduce() takes each element of the array and reduces it step by step into one final result (like a number, object, string, etc.).

let result = arr.reduce((preVal,currVal)=>{
    return preVal + currVal;
},20)
console.log(result);