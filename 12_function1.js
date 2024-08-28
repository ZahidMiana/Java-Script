//Function==> when we collect information into a package and use number of time its known as function 

//its basic way to print name in character way 
// console.log("Z");
// console.log("a");
// console.log("h");
// console.log("i");
// console.log("d");

//now create a function make a package of above data and reuse where you want, use function keywords
function myName(){
console.log("Z");
console.log("a");
console.log("h");
console.log("i");
console.log("d");
}

//now call the above function
myName();

//write function adding two numbers
function AddTwoNumbers(number1, number2){
    console.log(number1+number2);
}

//calling function
AddTwoNumbers();//here its print NAN we didn't gave any arguments
AddTwoNumbers(10,20);//30
AddTwoNumbers(4,"7");//it take 7 as a string so print 47
AddTwoNumbers(2, null);

let Result=AddTwoNumbers(8,7);//we cannot save in a variable because function have't return anything
console.log(Result);//it print undefined because function kuch return nae kr rha 

//now when function return something
function Mutiplication(number1, number2){
    let result= number1*number2;
    return result;

    console.log("Zahid");//it never execute this line because after return statement function did't do any thing so its unreachable.
}

let Result2=Mutiplication(12,5);
console.log("The Final result is:  ", Result2);


//let explore other function 
function loginUserMessage(username ="Zahid"){//we can also use default values
    if(username===undefined)
    {
        console.log("Please enter a username: ");
        return;
    }
    return `${username} Just login `;
}

loginUserMessage("Zahid");//it did't print anything because function return something and we have't save in any variabl so now 

console.log(loginUserMessage());

//Function with Object and Arrays
//The rest operator (...) in JavaScript functions allows you to represent an indefinite number of arguments as an array. This is useful when you want to work with functions that accept a variable number of arguments.

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(2));//it print 2 
console.log(calculateCartPrice(100,200,300));//for this we use rest operator, which gave us multiple argument in an array 


//with Object
const user={
    username: "Zahid",
    price:  1200,
}

function HandleObject(anyobject){
    console.log(`Name of User is ${anyobject.username} and Price is ${anyobject.price}`);
}

//function call
HandleObject(user);
//other way
HandleObject({
    username: "Shahid",
    price: 1600,
})

//Now for Array
const MyNewArray=[12,14,16,18];

function ArrayValues(getarr){
    return getarr[2];
}

console.log(ArrayValues(MyNewArray));