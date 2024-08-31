//Loops (for, while and do while)
//for

for (let i = 0;i <= 10; i++) {
    const element = i;
    if(element==5)
    {
        console.log("5 is Best Number ");
    }
    console.log(element);
}

console.log("=========================================\n");
//other example
for (let i = 0; i < 5; i++) {
    console.log(`Outer Loop Value is: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Inner Loop Value is: ${j} and ${i}`);
    }
    
}

//break
for (let index = 0; index <= 12; index++) {
    const element = index;
    if(index==7)
    {
        console.log("Detected 7");
        break;
    }
    console.log(`Value of index ${index}`);
}

//continuous
for (let index = 0; index <= 12; index++) {
    const element = index;
    if(index==7)
    {
        console.log("Detected 7");
        continue;
    }
    console.log(`Value of index ${index}`);
}

console.log("========While and Do-While loop=========\n");
//While and Do-while
let index=0;
while(index<=10)
{
    console.log(`Value of index: ${index}`);
    index=index+2;
}

let array=["zahid", "shan", "Tahir", "Suban", "Ali"];
let  i=0;
while(i<array.length)
{
    let element=array[i];
    console.log(element);
    i++;
}

console.log("====Do While Loop==== \n");
let score=1;
do{//it run one time must because body execute before the condition check  
    console.log(`Your Score is: ${score}`);
    score++;
}while(score<6);