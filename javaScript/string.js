// String :=== In JavaScript, a string is a sequence of characters used to represent text. Think of it as anything you type inside quotes: letters, numbers (as text), symbols, or spaces.
// string are immutable in javascript == can't change string value in javascript.

/*
these are string example 
double quote
let name = "shiwangi";
let name = " ";
let name = " a";
let name = " 1234";

here also followed this type :==
single quote
let name = 'shivi';
let name = '123';
let name = 'a';
let name = ' ';

backtick
let name = `shivi`;
let name = ` `;
let name = `123`;
let name = `a`;
let sentence = `my name is ${name}`;
*/

// Notes :=== Backtick ( ` ) is used to create template literals (modern strings),allows inserting variable directly. ex-- let msg = `Hello ${name}`;


// let str1 = "shiwangi";
// let str2 = 'shiwangi';
// let str3 = `shiwangi`; // important type of string
// let name = "shiwangi" + 23 + "dubey" ;
// let fullN = name;
// console.log(str1,typeof str1);
// console.log(str2,typeof str2);
// console.log(str3, typeof str3);
// console.log(fullN,typeof fullN);

// let firstName = "shiwangi";
// let lastName = "dubey";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let fullName2 =`${firstName} ${lastName}`;
// console.log(fullName2);
// let a = 10;
// let b = 20;
// let c = 30;
// let str = `number 1 = ${a} number 2 = ${b} number 3 ${c}`;
// console.log(str);

// ${} === placeHolder , {a} == string



// create string using constructor :==

// let s = new String("shiwangi dubey");
// console.log(s);


// Escape Sequence :==

// let s1 = "hello \n are you";
// let s5 = "hello \\n world";
// console.log(s5);
// let s2 = "school";
// console.log(s2.length);
// console.log(s1);

// let s3 = 'hello " world';
// console.log(s3);
// let s4 = "hello \" world";
// console.log(s4, s4.length);


// let index = "hello world";
// console.log(index[2])
// console.log(index[6]);
// for(let ch of index){
//     console.log(ch);
// }
// for(let key in index){
//     console.log(key);
// }


// let str = "Hello"; // origional string never change because immutable always given copy value.
// let strcopy = str.toUpperCase();
// let str1 = str.toLocaleLowerCase();
// console.log(str,strcopy,str1);

// let space = "           lovely        ";
// console.log(space.trim(),space);

// let firstName = "lovely";
// let lastName = "dubey";
// console.log(firstName.concat(lastName));

// let str = "I am girl";
// let check = str.includes("girl");
// console.log(check);
// console.log(str.indexOf("g"));
// console.log(str.charAt(0));

// console.log(str.replace("girl","boy"));
// console.log(str.replaceAll("I am girl","you are beautiful"));

// let userName = "@ShiwangiDubey";
// console.log(userName.slice(1));
// console.log(userName.slice(5,10));

// console.log(userName.substring(6,11));

// let str = "alpha beta gamma";
// console.log(str.split(" "));

// 1. create a program to take full name from user and generate a username start with @, followed by their full name and ends with underscore followed by the length of full name .

// let userFullName = prompt(" enter the userName ");
// let userName = "@" + userFullName + " " + userFullName.length;
// let userName = `@ ${userFullName} ${userFullName.length}`
// console.log(userName);


// 2.Take a string and  a character from the user and :
// 1. count how many times that charcter appears in the string.
//2. Case-Insensitive version
//3.Find all occurrence positions

// let str = prompt("enter any string");
// let ch = prompt("enter any character");
// let count = 0;
// for(let val of str){
//     if(val.toLowerCase === ch.toLowerCase){
//         count++;
//     }
// }
// console.log(count);

// for(let index in str){
//     if(str[index].toLowerCase() === ch.toLocaleLowerCase){
//         console.log("index =",index);
//         count++;
//     }
// }
// console.log("count =",count);


// 3. 
let str =" I am shivi";
console.log(str.split(" ".length));