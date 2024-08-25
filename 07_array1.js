/* Array=>>> JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.) 
*/


const myArray=[1,2,3,4,5,6,7,8,9];
const Fruits=['apple','banana','mango', 'orange','guava'];

//other way of declaring arr
const heroes=new Array("Devil", "Marvel", "Spider-man", "Hulk");
console.log(heroes[3]);//accessing array element through indexes

//Array Methods
myArray.push(10);//add element in an array from end
myArray.push(11);//add
myArray.pop();//remove element from end
myArray.unshift(12);//add element from start
myArray.unshift(20);
myArray.shift();//remove element from start
console.log(myArray);

console.log(myArray.includes(10));//check 10 is in array or not (it return answer in boolean)
console.log(myArray.indexOf(8));//it tell us the index of 8
const newArray=myArray.join();//it basically convert our array into string (in comma separated form)
console.log(myArray);//orignal
console.log(newArray);//converted
console.log(typeof (newArray));//string

//slice and splice
//slice=>>Purpose: slice is used to create a new array by copying a portion of an existing array. It does not modify the original array.

console.log("A", myArray);
let otherArray=myArray.slice(1,3);//slice basically break into pieces like from index 1 to 2 (last index not included)
console.log(otherArray);
console.log("B", myArray);

//splice=>>Purpose: splice is used to add, remove, or replace elements in an array. It modifies the original array.
let otherArray2=myArray.splice(1,3);
console.log("C", myArray);
console.log(otherArray2);

console.log("==== Examples =====");
//example slice
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 4); // [2, 3, 4]
console.log(numbers);
console.log(slicedNumbers);

//example splice remove element 
let scores=[12,14,16,18,20];
let removeNumber=scores.splice(1,2);
console.log(scores);
console.log(removeNumber);

//add element
scores.splice(1,0, 10,20,30);//its mean add at index 1 (10,20,30)
console.log(scores);

//replace
scores.splice(18,20,100,200);//replace 18 and 20 with 100,200
console.log(scores);