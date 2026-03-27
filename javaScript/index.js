// 1. Get user to input number using prompt and print their possible arithmatic results

// let num1 = Number(prompt("enter the first number"));
// let num2 = Number(prompt("enter the seconf number"));
// console.log("num1 + num2 =", num1 + num2);
// console.log("num1 - num2 =", num1 - num2);
// console.log("num1 * num2 =", num1 * num2);
// console.log("num1 / num2 =", num1 / num2);
// console.log("num1 % num2 =", num1 % num2);
// console.log("num1 ** num2 =", num1 ** num2);


// 2.Can you chain assign operator  :== yes

// let a=b=c=57;
// console.log(c);

//3. Get user to input a number using prompt and check wheather even or odd using ternary operator 

// let num = Number(prompt("enter the number"));
// let result = (num%2 === 0 ) ? ("Even number"): ("Odd number");
// console.log(result);

//4. what is the final value of x  :== final o/p is 1
// let x = 5
// x+= 3;
// x-=2;
// x*=4;
// x/=6;
// x%=3;
// console.log(x); 

// 5.check if a number is within a range between 10 and 20 (inclusive).

// let num = 2;
// let result = (num>=10 && num<=20) ? "with in range" : "not in range";
// console.log(result);

//6. write  a program to find the largest number between 3 number using ternary operator 

// let a=2,b=5,c=8;
// let result= (a>b)?(a>c ? a :c ):(b>c ? b:c);
// console.log(result);

//7. take tghe email and password from the user if the email and password is incorrect or does not match the stored values, display the  message  "invalid email or password". if both  email and password match the stored values, display " you are logged in successfully !" ;

// let userName="lovely";
// let password ="1234";
// let databaseUser ="lovely";
// let datapassword ="1234";

// let result = (userName && password && databaseUser===userName && datapassword===password)
//  ?
// "logged successfully !"
// :
// "invalid username or password";
// console.log(result)


//8. write will be the output of the following javascript code.

// let a=5, b=3, c=-2;
// let result = (a++) + (--b) * (c--) - (++a) + (b--) / (--c);
// console.log("a", a);
// console.log("b", b);
// console.log("c" ,c);
// console.log("result", result);

//9. what is the output of console.log (~a) where a =0

// console.log(~0);

//10. what will be the output of the following java script code .

// let a= 6;
// let b= 3;
// let c="6";

// a+= b << 1;
// let d = a & b;
// let e = a | b;
// let f = a ^ b;
// let g = ~a;

// let check = (a == c) && (d < e) || !(f === e);
// let result = check ? typeof g : --b;
// console.log("a" , b );
// console.log("b", b);
// console.log("c", c);
// console.log("d (a & b)" ,d);
// console.log("e (a|b):",e);
// console.log("f (a ^ b):",f)
// console.log("g(~a):",g);
// console.log("check:", check);
// console.log("result:",result);


// 11. write will be the output find  following javascript code .

let x = 10;
let y = 5;
let z = "10";

x+= y *2;
let isequal = x == z;
let isStrictEqual = x === z;
let logicTest = (isecqual || isStrictEqual) && !(y>10);

let result = logicTest ? ++x : --y;
console.log("x:", x);
console.log("y:",y);
console.log("z:",z);
console.log("iseual :", isequal);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:",logicTest);
console.log("result:",result);
console.log("typeof of z:",typeof z);