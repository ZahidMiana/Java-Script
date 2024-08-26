/* OBJECT==> The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax. */

const { json } = require("express");

//singleton
//object.create  other method of creating a new object so we talk it later 

//symbol
const mySym=Symbol("key1");

//Object Literals
const JSUser={
    name: "Zahid",
    age: 22,
    [mySym]: "myKey1",
    location: "Faislabad",
    email: "zahidmiana56@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday", "Sunday"],
};
//how we access object data
console.log("Your name is: ",JSUser.name);
console.log(JSUser["name"]);//other method 

console.log(JSUser[mySym]);
console.log(typeof JSUser[mySym]);//it print a string if we use as a symbol then in object we write [mySym]

//how we change the values of object
JSUser.name="Tahir";//change the value
// Object.freeze(JSUser);//we freeze this object no changes after this line
JSUser.name="Ali"; //we can't change 
console.log(JSUser);

//Add function in object
JSUser.greeting=function(){
    console.log("hello! Js user");
}
console.log(JSUser.greeting());

JSUser.greeting2=function(){
    console.log(`Hello! Js User ${JSUser.name}`);
    console.log(`hello! JS User, ${this.name}`);//we can also access current object through this keyword
}

console.log(JSUser.greeting2());