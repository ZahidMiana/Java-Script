//Var====>>>var is function-scoped, meaning that if you declare a variable with var inside a function, it is accessible throughout the entire function. However, it is not limited to block scope, such as within an if, for, or while block.

//Let===>>>let is block-scoped, meaning that it is only accessible within the block it is defined in. A block is typically defined by a pair of {} curly braces, such as within an if, for, or while block.

var c=200;
let a=300;

if(true){
    let a=10;
    const b=20;
    var c=500;
    console.log("Inner a : ", a);
    console.log("Inner c : ", c);
}

console.log("Outer a: ", a);
console.log("Outer c: ", c);//it print 500 this is drawback of var it use scope value not global


//Nested Scope
function one(){
    const username="Zahid";

    function two(){
        const website="You Tube";
        console.log(username);//can we access the username here 
    }

    // console.log(website);//can we access the website here(we cannot access here because is ka scope hi function two tk thaa)

    two();
}

one();

//In if else statement
if(true){
    const username="Zahid";
    if(username==="Zahid")
    {
        const website="You Tube";
        console.log(username+ "  " + website);
    }

    // console.log(website);// error cannot access because website scope is above block
}

// console.log(username);//error cannot access because its scope is above block



//+++++++++++++++++Interesting+++++++++++++++++++

console.log(addOne(5));//it can print the value because below we just declare a function, In this case we use function before its declaration

function addOne(num){
    return num+1;
}


// console.logAddTwo(5);//but it throw error because we store below function in some sort of variable, In this case we cannot use function before its declaration
const AddTwo=function(num){
    return num+2;
}

