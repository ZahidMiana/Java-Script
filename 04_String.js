const name="Zahid";
let age=24;

console.log(name + age + " Value");//its old way to write this way now in modern way we can write
console.log(`My name is ${name} and my age is ${age}`);

const newName=new String("Pakistan"); //Another way to declare string
console.log(newName[0]);//we can access individual char of string
console.log(newName[1]);
console.log(newName.__proto__);//it gave object
console.log(newName.bold());//bold

//Now use different string functions
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
console.log(newName.charAt(3));//tell us the char 
console.log(newName.indexOf("a"));//it tell us the char index.

//creating substring when we print on console it neglect the last index
const newString=newName.substring(0,3);
console.log(newString);// it print (tah)

//slicing=> In which we gave start index and end when we print on console it neglect the last index in
// slicing we can also use negative index which is start from end of string
const otherString=newName.slice(-1, -4);
console.log(otherString);

//trim()
let City="     Karachi     ";
console.log(City);//it print with space 
console.log(City.trim());//it remove spaces

//replace()
let email="zahidmiana_gmail.com";
console.log(email.replace('_', '@')); //it replace _ sign with @
console.log(email.includes('zahid')); //checking it is in email or not 

//split() => It convert string into array
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split('-'));

let CityName="vijhianwalla";
console.log(CityName.big());

//concat()
const word1= "Lahore";
const word2= "Karachi";
console.log(word1.concat(' ', word2));