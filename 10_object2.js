//Singleton or through Constructor
const tinderUser=new Object();//singleton(through constructor)
const instaUser={}; //non singleton

//add key value pair in object
tinderUser.name="Sam";
tinderUser.id="123abc";
tinderUser.email="sam@example.com";

console.log(tinderUser);
console.log(instaUser);


//nested object are also applicable 
const Student={
    name: "Zahid",
    age: 24,
    Subject:{
        sub1: "OOP",
        sub2: "DATA",
        sub3: "Algo",
        Sports:{
            game1: "Cricket",
            game2: "PUBG",
        }
    }
}
console.log(Student);
console.log(Student.Subject.sub3);
console.log(Student.Subject.Sports.game2);


//How we merge two objects
const obj1={1: "a", 2: "b"};
const obj2={3: "c", 4: "d"};

const obj3={obj1, obj2};
console.log(obj3);//it print both individual objects

const obj4=Object.assign(obj1, obj2);//it merge both object
console.log(obj4);

const obj5=Object.assign({}, obj1, obj2);//it merge both the objects with accurate way
console.log(obj5);

// const obj6=[...obj1, ...obj2];
// console.log(obj6);

//other example
const o1={a:1};
const o2={[Symbol("foo")] : 2};

const obj7=Object.assign({}, o1, o2);
console.log(obj7);

//Array of Object
const Users=[
    {
        name: "Zahid",
        age: 23,
    },
    {
        name: "Tahir",
        age: 22,
    },
    {
        name: "Ali",
        age: 20,
    },
    {
        name: "Iqra",
        age: 19,
    },   
]

Users[1].name;//acces the array of Object
console.log(Users[1].name);

console.log("==================================================\n");
console.log(tinderUser);
console.log(Object.keys(tinderUser));//it returns the keys of object tinderUser
console.log(Object.values(tinderUser));
console.log(Object.entries(Users));//it return values in array form 

console.log("==================================================\n");
console.log(Object.keys(Users));
console.log(Object.values(Users));
console.log(Object.entries(Users));

console.log(tinderUser.hasOwnProperty('name'));//it basically check key is in object or not same like array include method 