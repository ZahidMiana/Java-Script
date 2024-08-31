//if

//if(condition){}
//if(true){}
//if(false){}
if(2== "2")//its print "2" take as integer
{
    console.log("Executed!");
}

if(2==="2")//its not execute because === check type also
{
    console.log("Executed!");
}
console.log("===================================\n");
//comparison Operator (<,>,=<, >=, ==, !=, ===(strict comparison), !==(strict negation))
//example 1
const temp=55;
if(temp<50)
{
    console.log("Temparature is less than 50");
}
else
{
    console.log("Temparature is greater than 50");
}

//example 2
const score=200;
if(score>100)
{
    // let power="Fly";
    var power="fly";//it can accessible outside the scope(remember its abd approach)
    console.log(`You can ${power}`);
}
console.log(`You can ${power}`);//it throw error because power scope is in if condition we cannot access outside the scope. (but if we make power variable var then we can access but its bad approach it can harm scope level approach).

const balance=340000;
if(balance>50000) console.log("You have a lot of Money");//implicit way of writing control-flows

console.log("===========================================\n");
//Nested
if(balance>50000 && balance<150000)
{
    console.log("You are poor");
}
else if(balance>150000 && balance<250000)
{
    console.log("You are Acerage");
}
else if(balance>250000 && balance<600000)
{
    console.log("You are almost rich");
}
else
{
    console.log("You are Millionaire");
}


console.log("===========================================\n");
//Switch Keys
// switch(key){
//     case 1:
//         break;

//     case 2:
//         break;

//     default:
//         break;
// }

//lets take an Example
let month=2;

switch(month){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Fabuary");
        break;

    case 3:
        console.log("March");
        break;

    default:
        console.log("Default matched");
        break;
}

//Falsy Values
//false , 0 , -0 , BigInt 0n ,  " " , null , Undefined , NaN

//Truthy Values
//"0", "false", " ", [], {}, function(){}

userEmail=[];
if(userEmail.length===0)
{
    console.log("Array is Empty");
}

const empObject={};
if(Object.keys(empObject).length===0)//keys function covert object into array
{
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??) null undefined ==>>>>>The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined. It's particularly useful when you want to provide a default value for variables that may be null or undefined.

let val1;
// val1= 5 ?? 10;
// val1= null ?? 15;
val1= undefined ?? 20;
// val1= undefined ?? null;
console.log(val1);
