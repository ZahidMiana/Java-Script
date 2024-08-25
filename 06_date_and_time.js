//Dates
let date=new Date();
console.log(date);
//other differ ways
console.log(date.toString());
console.log(date.toJSON());
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());

//now for specific date 
let myCreatedDate=new Date(2023, 0, 23, 5, 23,45);
console.log(myCreatedDate.toString());

let myCreatedDate1=new Date("2024-11-29");
console.log(myCreatedDate1.toString());

let myCreatedDate2=new Date("02-12-2004");
console.log(myCreatedDate2.toString());

console.log(date.getMonth());
console.log(date.getDay());