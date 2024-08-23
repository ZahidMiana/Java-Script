//Data Type Comparison
//for comparison make sure your datatypes are same if not then jaavascript forcefully change .
console.log("2">1);//here 2 automatically change into number
console.log("4"<6);//here 4 automatically change into number


/*the reason is that equality == check and comaparison <,>,<=,>= work differently.
comparison convert null into a number treating it as 0.
thats why null>0 is false and null>=0 is true.
*/
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// === its check strictly not data also datatypes
console.log("2"== 2);
console.log("2"===2);


//Data Types Summary

/*Primitive Data Types
7 types=> string , number, boolean, null, undefined, symbol, bigInt
*/

/*Reference (non primitive)
    Arrays, Object, function
*/

let arr=["zahid", "Tahir", "Shahid", "Mujahid"];

let obj={
    Name: "Zahid",
    Age:  22,
}

const myFunc=function(){
    console.log("Hello World!");
}


/*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                                   number
ii)            String                                   string
iii)           Boolean                                  boolean
iv)           Bigint                                   bigint
v)            Symbol                                    symbol
vi)           Null                                      object
vii)          Undefined                                 undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/

//Stack (Primitive Data Types)   Heap(Non Primitive Data Types)