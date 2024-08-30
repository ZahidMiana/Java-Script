//Arrow Functions===>>>>Arrow functions are a concise syntax for writing function expressions in JavaScript. They are introduced in ES6 (ECMAScript 2015) and provide a few distinct differences compared to traditional function expressions.

const User={
    username: "Zahid",
    price :500,
    welcomeMessage: function(){
        //this keyword==> When we refer current context then use "this" keywords 
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
    }
}

User.welcomeMessage();//context is same 
User.username="Virat";//change the username 
User.welcomeMessage();

console.log(this);//here its print empty object but we run this line on browser it print window object

function chai(){
    let username="Zahid";
    console.log(this.username);//it cannot work its used in object context not in function
    // console.log(this);//it print lot of objects and method etc
}

chai();

const chai1=function(){
    let username="Babar";
    console.log(this.username);//it cannot work its used in object context not in function
}

chai1();

//basic Syntex of Arrow Function
// ()=>{}
// const Add=(a,b)=>{return a+b}

const chai2=()=>{
    let username="Babar";
    console.log(this.username);//it cannot work its used in object context not in arrow function
}

chai2();

//explicit return
const Multiplication= (a,b)=>{
    return a*b;
}
//call
console.log("Multiplication of Two Numbers: ", Multiplication(12,5));

//Implicit Return
const Addition= (a,b)=> a+b;
//const Addition= (a,b)=> (a+b); we can also write in this way implicitly
console.log("Addition of Two Numbers: ", Addition(12,8));

//return an object
const Chai4=(a,b) => ({username: "Iqra", Password: 123});
console.log(Chai4(11,12));


//(IIFE) Immediately Invoked function Expressions
// Immediately Invoked Function Expressions (IIFE) in JavaScript are functions that are executed immediately after they are defined. The primary purpose of an IIFE is to create a new scope, thus avoiding polluting the global scope with variables and functions. This pattern is especially useful for isolating variables and avoiding conflicts in larger codebases.

//Simple IIFE
(function(){
    console.log("How Are You Man!");
})();

//name IIFE
(function Maser(){
    console.log("Hy My Name is Zahid Iqbal");
})();

//Arrow IIFE
((name)=> {
    console.log(`Are You Mad ${name}`);
})("Zahid");
