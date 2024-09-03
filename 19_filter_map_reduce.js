//call back ===>>>> In JavaScript, a callback is a function passed as an argument to another function. This allows the second function to execute the callback function once a certain task or operation is completed. Callbacks are commonly used for handling asynchronous operations, such as API calls or file reading, where you want to execute some code after the operation finishes.

const Coding=["Java", "Go Lang", "Ruby", "Scala", "JavaScript", "Python"];

//for each never return value
// const values=Coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);


//filter===>>>>The filter method creates a new array containing all the elements that pass a specified test (i.e., the callback function returns true for those elements). The original array remains unchanged.

const myNum=[1,2,3,4,5,6,7,8,9];

const Numbers= myNum.filter( (value) => value>4)
console.log(Numbers);

//other way
const newArray=[];
newArray.forEach( (num) => {
    if(num>4)
    {
        newArray.push(num);
    }
})


//map==>>>The map method creates a new array by applying a provided function to each element of the original array. Like filter, it doesn't modify the original array, but it does return a new array where each element is the result of the callback function.

const MyNumber=[1,2,3,4,5,6,7,8,9,10];

let newNum=MyNumber.map( (num) => {//if we write in this braces then use return otherwise no problem
    return num+10;//if we do not use return it print undefined because we create a new scope(same for filter)
})

console.log(newNum);

//chaining==> Mean when we use two or more method ek sth
const  Num=[1,2,3,4,5,6,7,8,9,10];
let MeraNumber=Num.map( (num) => num*10).map( (num) => num+2).filter( (num) => {
    if(num>40)
    {
        return num;
    }
});
console.log(MeraNumber);


//reduce method 
const num1=[1,2,3,4];

let myTotal= num1.reduce( function(acc, curr) {
    console.log(`Acc is ${acc} and Curr is ${curr}`);
    return acc+curr;
} ,0)

console.log(myTotal);