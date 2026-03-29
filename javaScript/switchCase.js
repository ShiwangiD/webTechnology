// let color ="green";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//         case "yellow":
//             console.log("caution");
//              break;
//             case "green":
//                 console.log("go");
//                  break;
//                 default:
//                     console.log("invalid");
// }



// let age =8;
// if(age>=18){
//   console.log("you can drive the car ");
// }
// else{
//     console.log("you can't drive the car");
// }

// let score = 99;
// if(score>=99)
// console.log("you are topper");
// else console.log("hey you are not getting good marks");

// let fee = 500000;
// let result = (fee>=500000) ? "you can join the JFD" : "you can join the SAS";
// console.log(result);


// let age = Number(prompt("plz enter your age :"));
// let result = age>=90 ? "elder" : "younger";
// console.log(result);
// document.write(result);


// let subscriptionType = "standard";
// if(subscriptionType === "premium"){
//     console.log("you have access all content");
// }
// else if(subscriptionType === "standard"){
//     console.log("you have limited subscription");
// }
// else{
//     console.log("you are not valid the subscription");
// }

// let subscriptionType = prompt ("enter the type of subscription :");
// if(subscriptionType === "premium"){
//     console.log("you have access the all contenet");
//     document.write("you have access all content");
// }
// else if (subscriptionType === "standard"){
//     console.log("you have access limited content ");
//     document.write("you have access limited content");
    
// }
// else{
//     console.log("plz recharge your account");
//     document.write("plz recharge your account");
// }


// 1.let num1 = Number(prompt("enter the numebr first :"));
// let num2 = Number(prompt("enter the second number : "));
// let operation = prompt("enter the operator + - * / % ** ");
// let result;
// if(operation === "+"){
//     result = num1+num2;
//      console.log("sum is :",result);
// }
// else if(operation === "-"){
//     result = num1-num2;
//     console.log("sub is :",result);
// }
// else if(operation === "*"){
//     result = num1*num2;
//     console.log("mult is :",result);
// }
// else if(operation === "/"){
//     result = num1/num2;
//     console.log("div is :",result);
// }
// else if(operation === "%"){
//     result = num1%num2;
//     console.log("mod is :",result);
// }
// else if(operation === "**"){
//     result = num1**num2;
//     console.log("pow is :",result);
// }
// else{
//     console.log("invalid operation");
// }  



// 2.take user three input and find smallest number .

// let num1 = Number(prompt("enter number first :"));
// let num2 = Number(prompt("enter number second :"));
// let num3 = Number(prompt("enter number third :"));
// console.log(num1,num2,num3);
// if(num1< num2 && num1 < num3){
//     console.log(`${num1} is smaller`);
// }
// else if(num2 < num1 && num2<num3){
//     console.log(`${num2} is smallest`);
// }
// else{
//     console.log(`${num3} is smallest`);
// }


//3. write a program to manage role-based access control
// give a user role ("admin , editor, view ")
// admin : full access
// editor : edit access
// viewer : read only  using switch case


// let role = prompt("enter role");
// switch(role){
//     case "admin":
//         console.log("full access ");
//         break;
//         case "editor":
//             console.log("edit access");
//             break;
//             case "viewer" :
//                 console.log("read only");
//                 default:
//                     console.log("enter the valid role");
// }


 
// que4. check if number is divisible by 3 0r 5 both  print "Fizz" for multiples of 5 "FizzBuzz" for both.

// let num = 30;
// if(num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz");
// }
// else if(num % 5 === 0){
//     console.log("Buzz");
// }
// else if(num % 3 === 0){
//     console.log("Fizz");
// }
// else{
//     console.log("neither divisible by 3 nor by 5");
// }

// 5. create a simple calculator Take  two numbers and an operator(=,-,*,/,%) and calculate the result using switch.

// let num1 = 23;
// let num2 = 23;
// let operator = "+";
// switch(operator){
//     case "+":
//         console.log(`${num1} ${operator} ${num2} = ${num1 +num2}`);
//         break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//             break;
//             case "*":
//                 console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//                 break;
//                 case "/":
//                     console.log(`${num1} ${operator} ${num2} = ${num1 /num2}`);
//                     break;
//                     case "%":
//                         console.log(`${num1} ${operator} ${num2} = ${num1 % num2} `);
//                         default:
//                             console.log("enter the operator");

// }

// create simple AIM   === check Balance , Deposite , withdraw and Exit .

// let totalBalance = 1000000;
// let userChoice = Number(prompt("enter your choice [check Balance 2. deposite 3. withDraw 4. exit]:"));
// if(userChoice === 1){
//     console.log("your current balance :" ,totalBalance);
// }
// else if(userChoice === 2){
//     let depositeAmount = Number(prompt("enter amount to deposite :"));
//     if(depositeAmount > 0){
//         totalBalance = totalBalance + depositeAmount;
//     console.log("your current Balance is :", depositeAmount);
//     }
//     else{
//         console.log("Please enter a valid deposite amount");

//     }
// }
// else if(userChoice === 3){
//     let withdrawAmount = Number(prompt("enter amount of deposite :"));
//     if(withdrawAmount > 0 && withdrawAmount <= totalBalance){
//         totalBalance -= withdrawAmount;
//         console.log("your current balance is ",totalBalance);
//     }
//     else{
//         console.log("please enter your  valid withdraw  amount");
//     }
// }
//  else{
    //     console.log("thanks for coming !");
    // }





