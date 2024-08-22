"use strict";//treat all js code as  a new version
//alert(3+3);//we are using node js not a browser

/*1. Primitive Data Types
These are the most basic data types in JavaScript. They include:

String: Represents textual data, e.g., "Hello, World!".we can also write in single quote.
Number: Represents both integer and floating-point numbers, e.g., 42 or 3.14.
Boolean: Represents logical values, either true or false.
Undefined: A variable that has been declared but not yet assigned a value has the value undefined.
Null: Represents the intentional absence of any object value. It’s often used to indicate "no value" or "empty".
Symbol: Represents a unique identifier, often used for object property keys.
BigInt: Represents integers with arbitrary precision, useful for working with large integers beyond the safe limit for the Number type.
*/

let Name="Zahid Iqbal"; //string
let age=23;//number
let ismarried=false;//boolean
let city;//undefined
let car=null;//null
let uniqueId=Symbol("id");//symbol
let bigNumber = 1234567890123456789012345678901234567890n;//BigInt

console.log("========================================\n");
// console.table(Name, age, ismarried, city, car, uniqueId,bigNumber); 
console.log("Your name is: ", Name);
console.log("Your age is: ", age);
console.log("Are You Married: ", ismarried);
console.log("Your city is: ", city);
console.log("Your car is: ", car);
console.log("Your uniqueId is: ", uniqueId);
console.log("Your bigNumber is: ", bigNumber);

console.log("=======================Type of datatypes================\n");
console.log(typeof(Name));
console.log(typeof(age));
console.log(typeof(ismarried));
console.log(typeof(city));
console.log(typeof(car));//this is Null which is basically object
console.log(typeof(uniqueId));
console.log(typeof(bigNumber));

console.log("==================Data Type Conversion======================\n");
let score="33abc";

console.log(score);
console.log(typeof(score));

let valueinNumber=Number(score);
console.log(typeof(valueinNumber));
console.log(valueinNumber);//as we write 33abc it print NAN mean not a number its a special type in javascript
//NaN stands for "Not-a-Number" in JavaScript. It is a special value that indicates that a computation has failed to produce a valid number.

//conversion
// "33"=33
// "33abc"=NAN
// true=> 1 ,, false=>0

let login=1;
let booleanisLogin=Boolean(login);
console.log(booleanisLogin);

// 1=>true     0=>false
// ""=> false
// "zahid"=> true

// we also convert number to string 
let marks=45;
console.log(marks);
console.log(typeof marks);

let NumbertoString=String(marks);
console.log(NumbertoString);
console.log(typeof NumbertoString);

// console.log("=============Airthmatic Operations===================");
//console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2**3);
// console.log(2%3);

//concatenate strings
let str1="Zahid";
let str2=" Iqbal";
let str3=str1+str2;

console.log(str3);

//String to Number
console.log("1"+2);
console.log(2+"3");
console.log("2"+3+3)//233
console.log(3+3+"2")//62
console.log(+true)//1
console.log(+"")//0

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment link to study
