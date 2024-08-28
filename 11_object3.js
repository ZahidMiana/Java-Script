//Object De-structure==>>Object destructuring in JavaScript is a convenient way to extract specific properties from objects into individual variables. This syntax allows you to unpack values from objects or arrays into distinct variables.

const course={
    courseName: "Algorithms",
    Price:   "12000",
    Instructor: "Zahid Iqbal",
}

course.Instructor; //we can access in this way but when we print element multiple time then its bad way

//we extract value from course object
const{Instructor}=course;//this is the clean and best way ,through this we print multiple time easy way
console.log(Instructor);



//its basically mostly use in react and clean and efficient way 

