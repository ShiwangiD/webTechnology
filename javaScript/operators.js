// 1.Arithmatic Operator :-

// console.log(5+2);
// console.log(5-2);
// console.log(5*2);
// console.log(5%2);
// console.log(5/2);
// console.log(5**2);


// challenge 1

// let pricePerItem = 150;
// let quantity = 3;
// let totalPrice = pricePerItem * quantity;
// let discount = totalPrice * (10/100);
// let discountPrice = totalPrice - discount;
// console.log("price per item = ", pricePerItem);
// console.log("quantity",quantity);
// console.log("discount",discount);
// console.log("totalPrice =",totalPrice);

// 2.Assignment Operators :-

// let a= 5;
// console.log(a);
// a = a+5;
// console.log(a);

// a+=30;
// console.log(a);

// a-=60;
// console.log(a);
// a*=2;
// console.log(a);

// a/=3;
// console.log(a);
// a%=4;
// console.log(a);

//3. Comparison Operator (check things)

// == check only value and === first check the data type then value 

// console.log(5==5);
// console.log(5=="5");
// console.log(5==="5");
// console.log(5!=2);
// console.log(5!="2");
// console.log(5!="5");

// console.log(5!==2);
// console.log(5!=="2");
// console.log(5!=="5");
// console.log(5!==5);

//4. Logical operators :=

//AND operator &&(both condition are true) , OR Operator ||(one condition is true then true), Not opertor ! (reverse )

// And (&&) operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Or (||) operator 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// not (!) operator
// console.log(!false);
// console.log(!true);


// let x =1003 ;
// console.log(x>=0 && x<=1000);

// let x =1003 ;
// console.log(x>=0 || x<=1000);

// let x =3;
// console.log(!x);

// Increament and decreament Operator (++ and --)

//pre Increament (++a first use then increment and decreament)
//post Increament and decreamenet(a++ increament and decreament then use)

// let a=5;
// console.log(a);
// console.log(++a);
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a--);
// console.log(a);

// let result = a++ + ++a -10;

//5. Ternery Operator  condition? true:false : - work on three operand 

// let age=7;
// let result = age>=18 ? "drive":"cant drive";
// console.log(result);


// challenge 2
// one booking website ,check if the user's age is valid for booking
// Age should be at least 18:
// write  a condition to check and display a message :"elisible for booking "if the users is 18 or older ."Not eligible for boking" otherwise



// let age = 18;
// let ableToBooking= age>=18?"elisible for booking":"elisible for not booking";
// console.log(ableToBooking);

// Challenge 3
// On a login page, verify the user's creadential : check if username is not empty and password is not empty(&& operator) if either is empty, display an error message : "both field are required "

// let username="lovely";
// let password ="123";
// const result =(username && password)?("login successful"):("username and password are required");
// console.log(result)

// challenge 4
// find the larges Node. from given 3 numbers 3
// nested ternary operator 
// let a=5, b=2,c=7;
// let result =(a>b)?(a>c ? a:c):(b>c ? b:c);
// console.log(result);

//6.bitwise Operator 

console.log(5&3);
console.log(4&7);

console.log(8|11);
console.log(26|15);

console.log(~3);
console.log(~0);


