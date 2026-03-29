// LOOP :=== In JavaScript, a loop is used to repeat a block of code multiple times until a condition is met.
// why loops are used : 1.Avoid writing the same code again and again
// 2.Work with arrays or lists
// 3.Automate repetitive tasks


// For Loop :=== Used when you know how many times to run the loop.

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// while Loop :=== Runs as long as a condition is true.

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// Do while Loop :=== Runs at least once, even if the condition is false.

// let i =10;
// do{
//     console.log(i)
// }
// while(i<=5);


// For- of loop :=== Used to iterate over iterable objects like arrays. return actual data (character form) 
// note := ues where want value 

// let str = " shiwangi Dubey";
// for(let ch of str){
//     console.log(ch);
// }

// for(let i=0; i<str.length;i++){
//     console.log(str[i]);
// }

// for - in loop :=== Used to loop through object properties (keys). return array index key
// use where want key

// let str="shiwangi";
// for(let ch in str){
//     console.log(ch)
// }


// Challenge 1:
// print all even number 0 to 100

// for(let i =0;i<=100;i++){
//     if(i%2 === 0)
//      console.log(i)
// }

// challenge 2 : calculate how many vowels and consonenets are in a given string using for of  loop

// let str = "hello world";
// for(let letter of str){
//     if(letter === 'a' || letter === 'i' || letter === 'o' || letter === 'u' || letter ==='e'){
//         console.log(letter);
//     }
//     else{
//         console.log(letter);
//     }
    
// }

// challenge 3 : calculate  sum of n numbers.

// let n = 10;
// let sum = 0;
// for(let i =1;i<=n;i++){
//     sum =sum +i;
// }
// console.log(sum);

// challenge 4 : calculate the sum of numbers from 'm' to 'n'.

// let m = Number(prompt("enter the value of m"));
// let n = Number(prompt("enter the value of n "));
// let sum = 0;
// for(let i=m;i<=n; i++){
//     sum+=i;
// }
// console.log(sum `${sum}`);

// challenge 5 : print all odd number from 0 to 'n'

// let n = Number(prompt("enter the number of n value "));
// for(let i=0;i<=n;i++){
//     if(i%2 !== 0)
//         console.log("number is odd :",i);
//     }

// challenge 6 : create a "number know" game .(ask the user to keep guessing the number until the user enters correct guess).

// challenge 7 : simple password  checker fixed attempts

// let password = "lovely";
// let noOfattempt = 0;
// let userPassword = null;
// while(password !== userPassword && noOfattempt <3){
//     userPassword = prompt("enter password:");
//     if(userPassword === password){
//         alert("congratulations your password matched!");
//     }
//     else{
//         alert("your password is incorrect, please try again")
//     }   
// }

// 8 : create a program to find  the factorial of 'n'

// let n = 7;
// let fact =1;
// for(let i=1;i<=7;i++){
//     fact *=i;  // fact*=i
// }
// console.log("factorial",fact);

