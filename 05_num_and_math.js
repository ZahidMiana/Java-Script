//define of number
let score=400;
console.log(score);

let balance=new Number(1000);//other way of difining number
console.log(balance);

//we covert number to string
console.log(balance.toString());//here 1000 convert to string
//fixed() values after decimal
console.log(balance.toFixed(3));

//toPrecision()
const otherNumber=123.8966;
console.log(otherNumber.toPrecision(4));

//toLocaleString() it write in comma separated format
const hundred=100000000000;
console.log(hundred.toLocaleString());


console.log("==========  Math  ===============");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.sin(90));
console.log(Math.cos(0));
console.log(Math.round(12.6));//round off
console.log(Math.ceil(12.1));//ceiling mean print 13
console.log(Math.floor(12.1));//floor 12
console.log(Math.cbrt(6));//cube root
console.log(Math.sqrt(36));//square root
console.log(Math.min(4,5,7,9));//min
console.log(Math.max(11,12,131,4));//max

//mostly use math functions
console.log(Math.random());//this function always generate random 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*20)+1);
