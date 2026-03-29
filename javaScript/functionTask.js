// // 1. Write a regular function that takes a string and returns it with the first latter capitalized.

// function capitalizeFirstLetter(str){
//     console.log(str.charAt().toUpperCase()+str.slice(1));
// }
// capitalizeFirstLetter("lovely");

// setTimeout(()=> {
// alert("please login")
// },5000);

//2.Make a arrow function that takes  a price and a discount and returns the price after discount.

// let price = 1000;
// let discount = 20;
// let result =price - price *(discount/100);
// console.log(result);

// let calculateDiscountedPrice =(price,discount)=>{
//     let discountedPrice = price -price*(discount/100)
//     return discountedPrice;

// }
// let result = calculateDiscountedPrice(100,20);
// console.log(result);

// 3. create a function that builds a username from a full  name 

// function generateUserName(fullName){
//     return "@" + fullName;
// }
// console.log(generateUserName("shiwangi"));


//4. write a function that takes a traffic light color and gives the correct instruction(e.g "go") for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else.

function generateInstructions(color){
if(color === "red"){
    console.log("stop");
}
else if(color === "green"){
    console.log("go");
}
else if(color === "yellow"){
    console.log("caution");
}
else{
    console.log("invalid color");
}
}
generateInstructions("green");