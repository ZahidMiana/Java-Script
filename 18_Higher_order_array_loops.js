//for of loop

// [" ", " ", " "] strings in array
// [{}, {}, {}, {}] object in array

//write for array
const array=[1,2,3,4,5];
for (const val of array) {
    console.log(val);//no increament, no decreament, no condition it do everything by itself
}

//we write for string
const greeting="Hello World!";
for (const greet of greeting) {
    console.log(`Char of string is: ${greet}`);
}

console.log("================ Map =================\n");
//Maps (itself a object)==>>>In JavaScript, the Map object is a built-in data structure that holds key-value pairs and maintains the insertion order of the keys. It's part of ECMAScript 6 (ES6) and provides a more efficient and flexible alternative to traditional JavaScript objects for storing key-value pairs.
const map=new Map();
map.set('IND', "India");
map.set('USA', 'United State of America');
map.set('UK', 'United Kingdom');
map.set('IND', "India");// it cannot print because take unique values

//console.log(map);//print like this 

for (const key of map) {//or through for of loop
    // console.log(key);
}

//other way print key and value separately
for (const [key, value] of map) {
    // console.log(key, '-', value)
}

//through object
// const myObject={
//     game1: "PubG",
//     game2: "Free Fire",
// }

// for (const [key, value] of myObject) {//it cannot print because object is not iterateable
//     console.log(key, '-', value);
// }


// for in Loop
console.log("============= For In Loop============\n");

const Player={
    1: "Virat Kohli",
    2: "Babar Azam",
    3: "Kane Williamson",
    4: "AB Divviliars",
}

for (const key in Player) {
    // console.log(`${key} player name are ${Player[key]}`);
}

//for array
const programming=["R", "C", "C++", "JAVA", "JAVASCRIPT"];
for (const key in programming) {
//   console.log(key); //it only print the key not values while for of print both key and values 
}

for (const key in programming) {
    console.log(programming[key]);//through this we can access values 
}

/*  (Difference between for in and for of)
In JavaScript, for...of and for...in loops are used for iterating over collections, but they work in different ways and are used for different types of objects. Here’s a detailed comparison:

1. for...in Loop
Purpose: Iterates over the enumerable properties (keys) of an object.
Use Case: Best for iterating over the properties of an object, not for arrays or other iterable objects.

2. for...of Loop
Purpose: Iterates over the values of iterable objects like arrays, strings, maps, sets, and more.
Use Case: Best for iterating over elements in arrays or other iterable collections.
*/


//for each loop
console.log("=========for each loop========");
const actress=["Mehwish Hayyat", "Katina Kaif", "Kareena Kapoor", "Alia butt", "Iqra Kanwal"];

// actress.forEach(function(item){
//     console.log(item);
// })

//through arrow functions
// actress.forEach((value)=>{
//     console.log(value);
// })

//other way
function printMe(item)
{
    console.log(item);
}

actress.forEach(printMe);

//we can also do like this 
actress.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

console.log("===================================\n");
//other example
const coding=[//array of objects
    {
        langName: "JavaScript",
        langFileName: "js",    
    },

    {
        langName:"Java",
        langFileName:"java",    
    },

    {
        langName: "Python",
        langFileName: "py",    
    },
]

coding.forEach( (item) => {
    console.log(item.langName);
    console.log(item.langFileName);
})
