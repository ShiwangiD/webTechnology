//conditional statement :== lets your code make decisions it checks if something is true or false , and then runs certain runs certain code based on that

// let productsInStock = 3;
// if(productsInStock <= 0){
//     console.log("product is out of stock");
// }
// else{
//     console.log("product is in stock");
// }

    
let wheather = "rainy";
if(wheather === "rainy"){
    console.log("Take an umbrella");
}
else{
    console.log("enjoy the sunshine");
}

let name ="shiwangi dubey";
console.log("name is :",name);
console.log(`name is ${name}`);

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6

let [a,b,...rest]=[1,2,3,4,5];
console.log(rest);
