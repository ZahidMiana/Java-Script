const fruits=["Apple", "Orange", "Banana", "Guava"];
const vegetables=["Bhindi", "Kaddo", "Karella", "Tourii"];

// fruits.push(vegetables);//it push the whole array as a single element
// console.log(fruits);

console.log("........................\n");
const allItems=fruits.concat(vegetables);
console.log(allItems);

console.log("........................\n");
const allNewItems=[...fruits, ...vegetables];//it spreads all values 
console.log(allNewItems);

console.log("........................\n");
const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
const newOtherArray=anotherArray.flat(Infinity);//using flat concatenate all elements of sub arrays
console.log(newOtherArray);

console.log(Array.isArray("Zahid"));//it check array or not
console.log(Array.from("Zahid"));//it convert to array
console.log(Array.from({name: "Zahid"}));//it cannot convert to  array becz we tell them take key or value


let score1=100;
let score2=200;
let score3=300;
let score4=400;

console.log(Array.of(score1,score2,score3,score4));//creating array through multiple elements